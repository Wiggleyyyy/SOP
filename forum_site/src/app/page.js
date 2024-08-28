"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import * as React from "react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import bcrypt from "bcryptjs";
import { ClipboardType } from "lucide-react";
import { supabase } from "./utils/supabase/client";
import { useRouter } from "next/navigation";

export default function Home() {
  const {toast} = useToast();
  const router  = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  const [usernameInput, setUsernameValue] = React.useState("");
  const [passwordInput, setPasswordValue] = React.useState("");
  const [emailInput, setEmailValue] = React.useState("");
  const [repeatedPasswordInput, setRepeatedPasswordValue] = React.useState("");

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  async function Login() {
    if (isLogin) {
      //login
      if (!emailInput || !passwordInput) {
        return toast({
          variant:"destructive",
          title:"Missing fields.",
          description:"Please fill out username and/or password.",
        });
      }

      try {
        const {data, error } = await supabase.auth.signInWithPassword({
          email: emailInput,
          password: passwordInput,
        });

        console.log(data)

        if (error) {
          return toast({
            variant: "destructive",
            title: "Error logging in",
            description: error.message,
          });
        }

        toast({
          title:"Login successful",
          description: "successfully logged in, redircting to home page.",
        });

        router.push("/pages/home/");
      } catch (err) {
        return toast({
          variant:"destructive",
          title:"Error",
          description:`${err.message}`,
        });
      }
    } else {
      //Signup
      if (!usernameInput || !emailInput || !passwordInput || !repeatedPasswordInput){
        return toast({
          variant:"destructive",
          title:"Missing fields.",
          description:"Some fields are missing. Please fill out all fields.",
        });
      }

      if (passwordInput !== repeatedPasswordInput) {
        console.log("err")
        return toast({
          variant:"destructive",
          title:"Error creating account.",
          description:"Passwords do not match.",
        });
      }
      
      try {
        const { user, error } = await supabase.auth.signUp({
          email: emailInput,
          password: passwordInput,
          options: {
            data: {
              display_name: usernameInput,
            }
          }
        });

        if (error) {
          return toast({
            title:"Error",
            description:`${error.message}`,
            variant:"destructive",
          });
        }
      
        toast({
          title: "Account created.",
          description: "Account was succesfully created, redircting to home page.",
        });

        const {data, err } = await supabase.auth.signInWithPassword({
          email: emailInput,
          password: passwordInput,
        });

        if (err) {
          return toast({
            title:"Error",
            description:"There was an error redircting, try logging in.",
            variant:"destructive",
          });
        }

        console.log(data);

        router.push("/pages/home/");
      } catch (err) {
        return toast({
          variant:"destructive",
          title:"Error",
          description:"There was an error creating account. \n Try a different password, or try again later",
        });
      }
    }
  }

  return (
    <div className="h-[100dvh] flex flex-col items-center justify-center bg-background">
      <div className="flex absolute right-5 top-5">
        <ThemeToggle />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{isLogin ? "Log-in" : "Sign-up"}</CardTitle>
          <CardDescription>
            <Link href="#" onClick={toggleAuthMode} className="underline text-ring">
              {isLogin ? "Don't have an account? Create one!" : "Already have an account? Log in!"}
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLogin ? (
            <div>
              <p>Email</p>
              <Input
                id="username_input"
                value={emailInput}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <p>Password</p>
              <Input
                id="password_input"
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
            </div>
          ) : (
            <div>
              <p>Username</p>
              <Input
                id="username_input"
                value={usernameInput}
                onChange={(e) => setUsernameValue(e.target.value)}
              />
              <p>Email</p>
              <Input 
                id="email_input" 
                value={emailInput}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <p>Password</p>
              <Input
                id="password_input"
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              <p>Repeat password</p>
              <Input 
                id="repeated_password_input" 
                type="password" 
                value={repeatedPasswordInput}
                onChange={(e) => setRepeatedPasswordValue(e.target.value)}
              />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <Button className="w-full" onClick={Login}>
            {isLogin ? "Login" : "Sign up"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
