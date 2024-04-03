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
  const fetchedData = useDataStore((state) => state.fetchedData )

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
    </RadioGroup>
  )
}
