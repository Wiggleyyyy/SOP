"use client";

import Image from "next/image";
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"
import { useState } from "react";
import * as React from "react"
import { useToast } from "@/hooks/use-toast";
import { Description, Title } from "@radix-ui/react-toast";
import { supabase } from "./utils/supabase/client";
import bcrypt from "bcryptjs";
import { useRouter } from "next/navigation";


export default function Home() {
  const {toast} = useToast();
  const router  = useRouter();


  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const login = async () => {

    if (!usernameInput || !passwordInput) {
      return toast({
        title:"Error",
        description:"You need to fill out both email and password",
        variant:"destructive",
      })
    }

    try {
      const {data, error } = await supabase.auth.signInWithPassword({
        email: usernameInput,
        password: passwordInput,
      });

      if (error) {
        return toast({
          title:"Error",
          description:"Error log-ing in",
          variant:"destructive",
        });
      }

      router.push("./pages/lager/")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className="h-[90dvh]  flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>Log-In</CardTitle>
          <CardDescription>Please log-in to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Label className="text-slate-50">Email</Label>
          <Input className="text-slate-50" value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)}/>
          <Label className="text-slate-50">Password</Label>
          <Input className="text-slate-50"  value={passwordInput} type="password" onChange={(e) => setPasswordInput(e.target.value)}/>
        </CardContent>
        <CardFooter>
          <Button onClick={login}>Log-In</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
