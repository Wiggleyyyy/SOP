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

export function IncatationsAllDemo({items}) {

  return (
    <div className="w-[175vh] max-h-[50vh] overflow-y-auto">
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[20vh]">Image</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[15vh]">Name</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[25vh]">Description</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[5vh]">Cost</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[5vh]">Slots</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[15vh]">Effects</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[15vh]">Requirements</TableHead>
            <TableHead className="text-slate-950 dark:text-slate-50 w-[5vh]">ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-y-auto">
          {items.map((item) => (
            <TableRow key={item.id}>
                <TableCell className="text-slate-950 dark:text-slate-50"><img className="" src={item.image}/></TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.name}</TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.description}</TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.cost}</TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.slots}</TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.effects}</TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.requires}</TableCell>
                <TableCell className="text-slate-950 dark:text-slate-50">{item.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
