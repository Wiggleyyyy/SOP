"use client";

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Message({ profilePictureUrl, username, message }) {  // Destructure the props
  return (
    <div className="bg-card w-[90%] min-h-32 h-fit flex flex-row items-center my-5 p-2 rounded">
        <Avatar className="mx-3 h-20 w-20">
            <AvatarImage src={profilePictureUrl}/>
            <AvatarFallback className="dark:text-zinc-50 text-2xl">T</AvatarFallback>
        </Avatar>
        <Separator className="ml-2 bg-ring" orientation="vertical"/>
        <div className="flex flex-col ml-2 2-full">
            <Label className="dark:text-zinc-50 text-lg">{username}</Label>
            <Separator className="bg-ring mb-1" orientation="horizontal"/>
            <ScrollArea className="dark:text-zinc-300">
                <p>{message}</p>
            </ScrollArea>
        </div>
    </div>
  );
}
