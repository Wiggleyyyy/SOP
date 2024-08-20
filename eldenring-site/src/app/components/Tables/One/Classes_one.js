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

export function ClassesOneDemo({ item }) {

  return (
    <div className="w-[100%] min-h-[100dvh] h-[100%]">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center my-3 bg-slate-400 dark:bg-slate-800 rounded-lg p-3">
            <img src={item.image} alt={item.image} />
            <hr className="h-[0.2vh] w-[90%] bg-slate-50" />
            <Label className="text-slate-950 dark:text-slate-50 my-3">Name: {item.name}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Description: {item.description}</Label>
            <hr className="h-[0.2vh] w-[90%] bg-slate-50" />
            <Label className="text-slate-950 dark:text-slate-50">ID: {item.id}</Label>
        </div>
        <Table className="my-3 bg-slate-400 dark:bg-slate-800 rounded-lg">
          <TableCaption>Stats</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Level</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Vigor</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Mind</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Endurance</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Strength</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Dexterity</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Inteligence</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Faith</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Arcane</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-auto">
            <TableRow>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.level ? item.level : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.vigor ? item.vigor : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.mind ? item.mind : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.endurance ? item.endurance : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.strength ? item.strength : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.dexterity ? item.dexterity : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.inteligence ? item.inteligence : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.faith ? item.faith : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.arcane ? item.arcane : "N/A"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
