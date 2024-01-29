import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"
import { RadioGroupOrg } from "./radiogroup-orgOptions"

export function SheetDemo() {
  const [usState, setUsState] = useState('');
  const [city, setCity] = useState('');
  const [ein, setEIN] = useState('');

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Start!</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Single Search</SheetTitle>
            <SheetDescription>
              Enter EIN.
            </SheetDescription>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                EIN
              </Label>
              <Input type="text" id="State" placeholder="Enter State" value={ein} onChange={(e) => setUsState(e.target.value)} className="col-span-3"  />
            </div>
          <SheetTitle>Multi-Search</SheetTitle>
          <SheetDescription>
            Choose fields for lookup, city can be left blank but state must be selected.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              State
            </Label>
            <Input type="text" id="State" placeholder="Enter State" value={usState} onChange={(e) => setUsState(e.target.value)} className="col-span-3"  />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              City
            </Label>
            <Input id="username" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} className="col-span-3" />
          </div>
          <SheetTitle>Choose Organization Type</SheetTitle>
          <RadioGroupOrg></RadioGroupOrg>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">GO</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
