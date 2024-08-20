"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const types = [
  { value: "ammos", label: "Ammos" },
  { value: "armors", label: "Armors" },
  { value: "ashes", label: "Ashes of war" },
  { value: "bosses", label: "Bosses" },
  { value: "classes", label: "Classes" },
  { value: "creatures", label: "Creatures" },
  { value: "incantations", label: "Incantations" },
  { value: "items", label: "Items" },
  { value: "locations", label: "Locations" },
  { value: "npcs", label: "NPCs" },
  { value: "shields", label: "Shields" },
  { value: "sorceries", label: "Sorceries" },
  { value: "spirits", label: "Spirit summons" },
  { value: "talismans", label: "Talismans" },
  { value: "weapons", label: "Weapons" },
]

export function ComboboxDemo({ onChange }) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const handleSelect = (currentValue) => {
    setValue(currentValue)
    setOpen(false)
    if (onChange) {
      onChange(currentValue)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-slate-950 dark:text-slate-50 opacity-100"
        >
          {value
            ? types.find((type) => type.value === value)?.label
            : "Select type ..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command className="">
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No type found.</CommandEmpty>
            <CommandGroup>
              {types.map((type) => (
                <CommandItem
                  key={type.value}
                  value={type.value}
                  onSelect={() => handleSelect(type.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === type.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {type.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
