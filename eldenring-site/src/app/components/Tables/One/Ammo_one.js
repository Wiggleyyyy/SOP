"use client"

import * as React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { Label } from "@radix-ui/react-label";

export function AmmoOneDemo({ item }) {

  return (
    <div className="w-[100%] min-h-[100dvh] h-[100%]">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center my-3 bg-slate-400 dark:bg-slate-800 rounded-lg p-3">
            <img src={item.image} alt={item.image} />
            <hr className="h-[0.2vh] w-[90%] bg-slate-50" />
            <Label className="text-slate-950 dark:text-slate-50 my-3">Name: {item.name}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Description: {item.description}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Type: {item.type}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Passive: {item.passive}</Label>
            <hr className="h-[0.2vh] w-[90%] bg-slate-50" />
            <Label className="text-slate-950 dark:text-slate-50">ID: {item.id}</Label>
        </div>
        <Table className="my-3 bg-slate-400 dark:bg-slate-800 rounded-lg">
          <TableCaption>Attack power</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Physical</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Magic</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Fire</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Lightning</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Holy</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Critical</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-auto">
            <TableRow>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.attackPowerPhysical ? item.attackPowerPhysical.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.attackPowerMagic ? item.attackPowerMagic.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.attackPowerFire ? item.attackPowerFire.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.attackPowerLightning ? item.attackPowerLightning.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.attackPowerHoly ? item.attackPowerHoly.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.attackPowerCrititical ? item.attackPowerCrititical.amount : "N/A"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
