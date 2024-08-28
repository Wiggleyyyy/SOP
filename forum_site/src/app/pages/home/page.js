"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import * as React from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/app/utils/supabase/client";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import Message from "@/components/ui/message";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Asul } from "next/font/google";


export default function Home() {
  const { toast } = useToast();
  const router = useRouter();
  const [messageInput, setMessageValue] = useState("");
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]); // Store the messages here
  const [email, setEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");

  useEffect(() => {
    const checkSessionAndSetUsername = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("../");
        return;
      }
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user) {
        setUsername(user.user_metadata.display_name);
        setEmail(user.user_metadata.email)
      } else if (error) {
        toast({
          title: "Error",
          description: "There was an error fetching user data.",
          variant: "destructive",
        });
      }
    };

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("user_messages")
        .select("*")
        .order("created_at", { ascending: false }); // Fetch messages in reverse order
      console.log('Data:', data); // Log data
      console.log('Error:', error); // Log error if any
    
      if (error) {
        toast({
          title: "Error",
          description: "There was an error fetching messages.",
          variant: "destructive",
        });
      } else {
        setMessages(data);
      }
    };
    

    const subscribeToNewMessages = () => {
      const channel = supabase
        .channel('user_messages')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'user_messages' }, (payload) => {
          console.log('New message payload:', payload); // Log the payload
          setMessages((prevMessages) => [payload.new, ...prevMessages]); // Add new message at the top
        })
        .subscribe();
    
      return () => supabase.removeChannel(channel);
    };
    

    checkSessionAndSetUsername();
    fetchMessages();
    const unsubscribe = subscribeToNewMessages();

    return () => {
      unsubscribe(); // Clean up the subscription on component unmount
    };
  }, [router]);

  const HandleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); 
      SendMessage();
    }
  };

  const LogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error logging out",
        description: error.message,
      });
    } else {
      toast({
        title: "Logged out",
        description: "You have been logged out.",
      });
      router.push("..");
    }
  };

  const SendMessage = async () => {
    if (messageInput.trim() === "") return;

    const { data: { user }, error } = await supabase.auth.getUser();
    if (user) {
      const { data, err } = await supabase
        .from("user_messages")
        .insert([{ message: messageInput, from_user_id: user.id, username: user.user_metadata.display_name }]);

      if (err) {
        toast({
          title: "Error",
          description: "There was an error sending the message.",
          variant: "destructive",
        });
      } else {
        toast({ description: "Message was sent." });
        setMessageValue("");
      }
    } else if (error) {
      toast({
        title: "Error",
        description: "There was an error fetching user data.",
        variant: "destructive",
      });
    }
  };

  // const updateProfile = async () => {
  //   console.log(newUsername)

  //   // const { error } = await supabase.auth.updateUser({
  //   //   data: { display_name: username }  // Update the user_metadata with the new username
  //   // });
  // }

  return (
    <div className="w-full h-[100dvh] bg-background">
      <div className="flex flex-col absolute right-5 top-5 z-10">
        <div className="flex flex-row justify-start items-center mb-5">
          <Avatar>
            <AvatarImage src="/cat-1.jpg" />
            <AvatarFallback className="dark:text-zinc-50">D</AvatarFallback>
          </Avatar>
          <Label className="dark:text-zinc-50 ml-5">{username}</Label>
        </div>
        {/* <Sheet>
          <SheetTrigger asChild>
            <Button className="mb-5" variant="secondary">Edit profile</Button>
          </SheetTrigger>
          <SheetContent className="border-l-ring">
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Here you can edit your profile.
              </SheetDescription>
            </SheetHeader>
            <Separator orientation="horizontal" className="bg-ring"/>
            <div className="flex flex-col items-center justify-center mt-5">
              <div>
                <div>
                  <Label className="dark:text-zinc-50">Username</Label>
                  <Input className="dark:text-zinc-50"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                </div>
                <div className="mt-5">
                  <Label className="dark:text-zinc-50">Email</Label>
                  <Input className="dark:text-zinc-50" 
                    disabled 
                    value={email}
                  />
                </div>
                <Button className="mt-5 w-full" onClick={updateProfile}>Update profile</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet> */}
        <Button className="mb-5" variant="destructive" onClick={LogOut}>Log-out</Button>
        <ThemeToggle />
      </div>
      <div className="h-5/6 flex flex-col items-center">
        <ScrollArea id="message_area" className="ml-10 mt-10 h-[85%] w-[80%]">
          {messages.map((msg) => (
            <Message 
              key={msg.message_id}
              profilePictureUrl="/cat-1.jpg" 
              username={msg.username}
              message={msg.message}
            />
          ))}
        </ScrollArea>
      </div>
      <Separator className="bg-ring" />
      <div className="flex flex-row items-center justify-center bg-card p-5 h-[16.5dvh]">
        <Textarea
          value={messageInput}
          onChange={(e) => setMessageValue(e.target.value)}
          onKeyDown={HandleKeyDown} 
          className="w-[50%] h-full dark:text-zinc-50 text-lg"
          placeholder="Write a message..."
        />
        <Button className="ml-5 h-full" onClick={SendMessage}>Send message</Button>
      </div>
    </div>
  );
}
