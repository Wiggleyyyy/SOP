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

export function ArmorOneDemo({ item }) {

  return (
    <div className="w-[100%] min-h-[100dvh] h-[100%]">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center my-3 bg-slate-400 dark:bg-slate-800 rounded-lg p-3">
            <img src={item.image} alt={item.image} />
            <hr className="h-[0.2vh] w-[90%] bg-slate-50" />
            <Label className="text-slate-950 dark:text-slate-50 my-3">Name: {item.name}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Description: {item.description}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Category: {item.category}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Weight: {item.weight}</Label>
            <hr className="h-[0.2vh] w-[90%] bg-slate-50" />
            <Label className="text-slate-950 dark:text-slate-50">ID: {item.id}</Label>
        </div>
        <Table className="my-3 bg-slate-400 dark:bg-slate-800 rounded-lg">
          <TableCaption>Damage negation</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Phy</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Strike</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Slash</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Pierce</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Magic</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Fire</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Ligt</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Holy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-auto">
            <TableRow>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.dmgNegPhy ? item.dmgNegPhy.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.dmgNegStrike ? item.dmgNegStrike.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.dmgNegSlash ? item.dmgNegSlash.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.dmgNegPierce ? item.dmgNegPierce.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.dmgNegMagic ? item.dmgNegMagic.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.dmgNegFire ? item.dmgNegFire.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.dmgNegLigt ? item.dmgNegLigt.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.dmgNegHoly ? item.dmgNegHoly.amount : "N/A"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table className="my-3 bg-slate-400 dark:bg-slate-800 rounded-lg">
          <TableCaption>Resistance</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Immunity</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Robustness</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Focus</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Vitality</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Poise</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-auto">
            <TableRow>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.resImmunity ? item.resImmunity.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.resRobustness ? item.resRobustness.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.resFocus ? item.resFocus.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.resVitality ? item.resVitality.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.resPoise ? item.resPoise.amount : "N/A"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
