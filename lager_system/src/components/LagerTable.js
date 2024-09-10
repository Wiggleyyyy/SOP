"use client";

import * as React from "react";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "./ui/scroll-area";

export function Lager_table({ items, onSelectItem, selectedItems }) {
  return (
    <ScrollArea className="w-full h-[83vh]">
      <Table className="table-auto w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Select</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>EAN</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.item_id}>
              <TableCell>
                <Checkbox 
                  checked={selectedItems.includes(item.item_id)} 
                  onCheckedChange={() => onSelectItem(item.item_id)} 
                />
              </TableCell>
              <TableCell>{item.item_id}</TableCell>
              <TableCell>{item.item_name}</TableCell>
              <TableCell>{item.item_ean}</TableCell>
              <TableCell>{item.item_price}</TableCell>
              <TableCell>{item.item_qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
