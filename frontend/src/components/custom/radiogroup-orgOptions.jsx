import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { SheetDescription, SheetTitle } from "../ui/sheet";
import { Input } from "../ui/input";
import { useDataStore } from "@/store";


export function RadioGroupOrg() {
  const selection = useDataStore((state) => state.selection)
  const setSelection = useDataStore((state) => state.setSelection)
  const assets = useDataStore((state) => state.assets)
  const setAssets = useDataStore((state) => state.setAssets)
  const operator = useDataStore((state) => state.operator)
  const setOperator = useDataStore((state) => state.setOperator)

    
  

    function whatSelected(selection){
      switch(selection){
        case "nonprofit":
          return(<div>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="assets" className="text-right">
                Assets
              </Label>
              <Input id="c" placeholder="Enter Asset Amount" onChange={(e) => setAssets(e.currentTarget.value)} value={assets} className="col-span-3" />
            </div>
          </div>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="grel" id="r1" onClick={(operator)  => setOperator(operator.target.value)}/>
              <Label htmlFor="r1">Greater or equal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="gr" id="r2" onClick={(operator)  => setOperator(operator.target.value)} />
              <Label htmlFor="r2">Greater</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ls" id="r3" onClick={(operator)  => setOperator(operator.target.value)}/>
              <Label htmlFor="r3">Less</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lsel" id="r1" onClick={(operator)  => setOperator(operator.target.value)}/>
              <Label htmlFor="r1">Less or equal</Label>
            </div>
          </RadioGroup>
          </div>)
        case "foundation":
          return(<div>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="assets" className="text-right">
                Assets
              </Label>
              <Input id="c" placeholder="Enter Asset Amount" value={assets} onChange={(e) => setAssets(e.target.value)} className="col-span-3" />
            </div>
          </div>
          <RadioGroup className>
          <div className="flex items-center space-x-2">
              <RadioGroupItem value="grel" id="r1" onClick={(operator)  => setOperator(operator.target.value)}/>
              <Label htmlFor="r1">Greater or equal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="gr" id="r2" onClick={(operator)  => setOperator(operator.target.value)} />
              <Label htmlFor="r2">Greater</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ls" id="r3" onClick={(operator)  => setOperator(operator.target.value)}/>
              <Label htmlFor="r3">Less</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lsel" id="r1" onClick={(operator)  => setOperator(operator.target.value)}/>
              <Label htmlFor="r1">Less or equal</Label>
            </div>
          </RadioGroup>
          </div>)
        case "both":
          return(<div/>)
      }

    }

    return (
    <RadioGroup>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="nonprofit" id="r1" onClick={(selection)  => setSelection(selection.target.value)}/>
        <Label htmlFor="r1">Nonprofit</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="foundation" id="r2" onClick={(selection)  => setSelection(selection.target.value)} />
        <Label htmlFor="r2">Foundation</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="both" id="r3" onClick={(selection)  => setSelection(selection.target.value)}/>
        <Label htmlFor="r3">Both</Label>
      </div>
      <SheetTitle>Financial Options:</SheetTitle>
      <SheetDescription>Choosing nonprofit or foundation allows for financial filtering, both will show aggregate list.</SheetDescription>
      <div>{whatSelected(selection)}</div>
    </RadioGroup>
  )
}
