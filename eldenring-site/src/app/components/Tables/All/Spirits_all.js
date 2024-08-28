"use client"

import * as React from "react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export function SpiritsAllDemo({items}) {

  return (
    <div className="w-[175vh] max-h-[50vh] overflow-y-auto">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[25vh]">Image</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[10vh]">Name</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[45vh]">Description</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[5vh]">FP cost</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[5vh]">HP cost</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[5vh]">Effect</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[5vh]">ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-y-auto">
          {items.map((item) => (
            <TableRow key={item.id}>
                <TableCell className="text-slate-950 dark:text-slate-50"><img className="" src={item.image}/></TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.name}</TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.description}</TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.fpCost}</TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.hpCost}</TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.effect}</TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}