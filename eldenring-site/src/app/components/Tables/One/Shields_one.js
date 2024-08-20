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

export function ShieldsOneDemo({ item }) {

  return (
    <div className="w-[100%] min-h-[100dvh] h-[100%]">
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center my-3 bg-slate-400 dark:bg-slate-800 rounded-lg p-3">
            <img src={item.image} alt={item.image} />
            <hr className="h-[0.2vh] w-[90%] bg-slate-50" />
            <Label className="text-slate-950 dark:text-slate-50 my-3">Name: {item.name}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Description: {item.description}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Scales with: {item.scalesWith}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Requirements: {item.requirements}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Category: {item.category}</Label>
            <Label className="text-slate-950 dark:text-slate-50 my-3">Weight: {item.weight}</Label>
            <hr className="h-[0.2vh] w-[90%] bg-slate-50" />
            <Label className="text-slate-950 dark:text-slate-50">ID: {item.id}</Label>
        </div>
        <Table className="my-3 bg-slate-400 dark:bg-slate-800 rounded-lg">
          <TableCaption>Attack</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Phy</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Mag</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Fire</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Ligt</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Holy</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Crit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-auto">
            <TableRow>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.attackPhy ? item.attackPhy.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.attackMag ? item.attackMag.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.attackFire ? item.attackFire.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.attackLigt ? item.attackLigt.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.attackHoly ? item.attackHoly.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.attackCrit ? item.attackCrit.amount : "N/A"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Table className="my-3 bg-slate-400 dark:bg-slate-800 rounded-lg">
          <TableCaption>Defence</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Phy</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Mag</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Fire</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Ligt</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Holy</TableHead>
              <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Boost</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="overflow-y-auto">
            <TableRow>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.defencePhy ? item.defencePhy.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.defenceMag ? item.defenceMag.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.defenceFire ? item.defenceFire.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.defenceLigt ? item.defenceLigt.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.defenceHoly ? item.defenceHoly.amount : "N/A"}</TableCell>
              <TableCell className="text-slate-950 dark:text-slate-50">{item.defenceBoost ? item.defenceBoost.amount : "N/A"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
