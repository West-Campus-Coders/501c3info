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
import { RadioGroupOrg } from "./radiogroup-orgOptions"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { useDataStore } from "@/store"
import { useNavigate } from "react-router"
import { Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue, } from "../ui/select"

export function SheetDemo() {
  const usState = useDataStore((state)=> state.usState)
  const setUSState = useDataStore((state)=> state.setUSState)
  const city = useDataStore((state) => state.city )
  const setCity = useDataStore((state) => state.setCity)
  const ein = useDataStore((state) => state.ein)
  const setEIN = useDataStore((state) => state.setEIN)
  const selection = useDataStore((state) => state.selection)
  let navigate = useNavigate()

  async function go_to(){
    if(selection == 'nonprofit'){
    navigate("/nonprofits", {replace: true})
  }else{
    navigate('/foundations', {replace: true})
  }
  }


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Start!</Button>
      </SheetTrigger>
      <SheetContent>
      <ScrollArea className="h-full w-full">
      <ScrollBar orientation="vertical"/>
        <SheetHeader>
          <SheetTitle>Single Search</SheetTitle>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                EIN
              </Label>
              <Input type="text" id="ein" placeholder="Enter EIN" value={ein} onChange={(e) => setEIN(e.target.value)} className="col-span-3"  />
            </div>
          <SheetTitle>Multi-Search</SheetTitle>
          <SheetDescription>
            Choose fields for lookup, city can be left blank but state must be selected.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
        <Select onValueChange={(usState) => setUSState(usState)} defaultValue={usState}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a State"/>
              </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                  <SelectLabel>States</SelectLabel>
                    <SelectItem value="AL">Alabama</SelectItem>
                    <SelectItem value="AK">Alaska</SelectItem>
                    <SelectItem value="AZ">Arizona</SelectItem>
                    <SelectItem value="AR">Arkansas</SelectItem>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="CO">Colorado</SelectItem>
                    <SelectItem value="CT">Connecticut</SelectItem>
                    <SelectItem value="DE">Delaware</SelectItem>
                    <SelectItem value="DC">District of Columbia</SelectItem>
                    <SelectItem value="FL">Florida</SelectItem>
                    <SelectItem value="GA">Georgia</SelectItem>
                    <SelectItem value="HI">Hawaii</SelectItem>
                    <SelectItem value="ID">Idaho</SelectItem>
                    <SelectItem value="IL">Illinois</SelectItem>
                    <SelectItem value="IN">Indiana</SelectItem>
                    <SelectItem value="IA">Iowa</SelectItem>
                    <SelectItem value="DE">Delaware</SelectItem>
                    <SelectItem value="KS">Kansas</SelectItem>
                    <SelectItem value="KY">Kentucky</SelectItem>
                    <SelectItem value="LA">Louisiana</SelectItem>
                    <SelectItem value="ME">Maine</SelectItem>
                    <SelectItem value="MD">Maryland</SelectItem>
                    <SelectItem value="MA">Massachusetts</SelectItem>
                    <SelectItem value="MI">Michigan</SelectItem>
                    <SelectItem value="MN">Minnesota</SelectItem>
                    <SelectItem value="MS">Mississippi</SelectItem>
                    <SelectItem value="MO">Missouri</SelectItem>
                    <SelectItem value="MT">Montana</SelectItem>
                    <SelectItem value="NE">Nebraska</SelectItem>
                    <SelectItem value="NV">Nevada</SelectItem>
                    <SelectItem value="NH">New Hampshire</SelectItem>
                    <SelectItem value="NJ">New Jersey</SelectItem>
                    <SelectItem value="NM">New Mexico</SelectItem>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="NC">North Carolina</SelectItem>
                    <SelectItem value="ND">North Dakota</SelectItem>
                    <SelectItem value="OH">Ohio</SelectItem>
                    <SelectItem value="OK">Oklahoma</SelectItem>
                    <SelectItem value="OR">Oregon</SelectItem>
                    <SelectItem value="PA">Pennsylvania</SelectItem>
                    <SelectItem value="PR">Puerto Rico</SelectItem>
                    <SelectItem value="RI">Rhode Island</SelectItem>
                    <SelectItem value="SC">South Carolina</SelectItem>
                    <SelectItem value="SD">South Dakota</SelectItem>
                    <SelectItem value="TN">Tennessee</SelectItem>
                    <SelectItem value="TX">Texas</SelectItem>
                    <SelectItem value="UT">Utah</SelectItem>
                    <SelectItem value="VT">Vermont</SelectItem>
                    <SelectItem value="VA">Virginia</SelectItem>
                    <SelectItem value="VI">Virgin Islands</SelectItem>
                    <SelectItem value="WA">Washington</SelectItem>
                    <SelectItem value="WI">Wisconsin</SelectItem>
                    <SelectItem value="WY">Wyoming</SelectItem>
                  </SelectGroup>
                  </SelectContent>
        </Select>
          <div >
            <Input id="city" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} className="col-span-3" />
          </div>
          <SheetTitle>Choose Organization Type</SheetTitle>
          <RadioGroupOrg></RadioGroupOrg>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={go_to} >GO</Button>
          </SheetClose>
        </SheetFooter>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
