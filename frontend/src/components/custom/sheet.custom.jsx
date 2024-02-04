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
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
/* selection: '',
    setSelection: (selection) => set(() => ({selection: selection})),
    assSign: '',
    setassSign: (assSign) => set(() => ({assSign: assSign})),
    usState: '',
    setUSState: (usState) => set(() => ({usState: usState})),
    city: '',
    setCity: (city) => set(() => ({city: city})),
    assets: 0,
    setAssets: (assets) => set(() => ({assets: assets})),
    ein: '',
    setEIN: (ein) => set(() => ({ein: ein})),
    data: [],
    setData: (data) => set(() => ({data: data})),*/

export function SheetDemo() {
  const usState = useDataStore((state)=> state.usState)
  const setUSState = useDataStore((state)=> state.setUSState)
  const city = useDataStore((state) => state.city )
  const setCity = useDataStore((state) => state.setCity)
  const ein = useDataStore((state) => state.ein)
  const setEIN = useDataStore((state) => state.setEIN)
  const selection = useDataStore((state) => state.selection)
  const assets = useDataStore((state) => state.assets)
  const operator = useDataStore((state) => state.operator)
  const setOperator = useDataStore((state) => state.setOperator)
  const fetchedData = useDataStore((state) => state.fetchedData )
  const setData = useDataStore((state) => state.setData)
  let navigate = useNavigate()
  var data_holder
  async function get_data(){
    if(ein != ''){
      fetch(`http://127.0.0.1:8000/single/${ein}`, {method: "GET"}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error))
    }
    if(selection == 'nonprofit'){
    if(city == '' && assets == 0){
      fetch(`http://127.0.0.1:8000/nonprofit/${usState}`, {method: "GET"}).then(response => response.json()).then(data => {  data_holder = data}).catch(error => console.error(error))
      setData(data_holder)
    }else if(city != '' && assets == 0){
      fetch(`http://127.0.0.1:8000/nonprofit/${usState}/${city}`, {method: "GET"}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error))
    }else if(city == '' && assets != 0){
      fetch(`http://127.0.0.1:8000/nonprofit/${usState}/${operator}/${assets}`, {method: "GET"}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error))
    }else{
      fetch(`http://127.0.0.1:8000/nonprofit/${usState}/${city}/${operator}/${assets}`, {method: "GET"}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error))
    }
   }
   if(selection == 'foundation'){
    if(city == '' && assets == 0){
      fetch(`http://127.0.0.1:8000/foundation/${usState}`, {method: "GET"}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error))
    }else if(city != '' && assets == 0){
      fetch(`http://127.0.0.1:8000/foundation/${usState}/${city}`, {method: "GET"}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error))
    }else if(city == '' && assets != 0){
      fetch(`http://127.0.0.1:8000/foundation/${usState}/${operator}/${assets}`, {method: "GET"}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error))
    }else if(city != '' && assets != 0){
      fetch(`http://127.0.0.1:8000/foundation/${usState}/${city}/${operator}/${assets}`, {method: "GET"}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error))
    }
   }
   if(selection == 'both'){
    fetch(`http://127.0.0.1:8000/both/${city}/${usState}`, {method: "GET"}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error))
   }
   navigate("/results", {replace: true})

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
            <SheetDescription>
              Enter EIN.
            </SheetDescription>
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="State" className="text-right">
              State
            </Label>
            <Input type="text" id="State" placeholder="Enter State" value={usState} onChange={(e) => setUSState(e.target.value)} className="col-span-3"  />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="city" className="text-right">
              City
            </Label>
            <Input id="city" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)} className="col-span-3" />
          </div>
          <SheetTitle>Choose Organization Type</SheetTitle>
          <RadioGroupOrg></RadioGroupOrg>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" onClick={get_data} >GO</Button>
          </SheetClose>
        </SheetFooter>
        </ScrollArea>
      </SheetContent>
      <div>{console.log(operator)}</div>
    </Sheet>
  )
}
