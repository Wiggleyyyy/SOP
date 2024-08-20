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

export function IncantationsOneDemo({ item }) {

  return (
    <div className="w-[100%] min-h-[100dvh] h-[100%]">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center my-3 bg-slate-400 dark:bg-slate-800 rounded-lg p-3">
            <img src={item.image} alt={item.image} />
            <hr className="h-[0.2vh] w-[90%] bg-slate-50" />
            <Label className="text-slate-950 dark:text-slate-50 my-3">Name: {item.name}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Description: {item.description}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Cost: {item.cost}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Slots: {item.slots}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Effects: {item.effects}</Label>
            <hr className="h-[0.2vh] w-[90%] bg-slate-50" />
            <Label className="text-slate-950 dark:text-slate-50">ID: {item.id}</Label>
        </div>
        <Table className="my-3 bg-slate-400 dark:bg-slate-800 rounded-lg">
          <TableCaption>Requirements</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Intelligence</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Faith</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Arcane</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-auto">
            <TableRow>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.intelligence ? item.intelligence.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.faith ? item.faith.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.arcane ? item.arcane.amount : "N/A"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
