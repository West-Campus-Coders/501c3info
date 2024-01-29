import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import { SheetDescription, SheetTitle } from "../ui/sheet";
import { Input } from "../ui/input";



export function RadioGroupOrg() {
    const [selection, setSelection] = useState('');
    const [rev, setRev] = useState('');
    const [revsign, setRevSign] = useState('');
    const [assets, setAss] = useState('');
    const [assSign, setAssSign] = useState('');
    const [given, setGiven] = useState('');
    const [giveSign, setGiveSign] = useState('');

    function whatSelected(selection){
      switch(selection){
        case "nonprofit":
          return(<div>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="revenue" className="text-right">
                Revenue
              </Label>
              <Input type="text" id="revenue" placeholder="Enter Revenue Amount" value={rev} onChange={(e) => setRev(e.target.value)} className="col-span-3"  />
            </div>
            <RadioGroup className="inline-block">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="=" id="r1" onClick={(revsign)  => setRevSign(revsign.target.value)}/>
              <Label htmlFor="r1">=</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value=">" id="r2" onClick={(revsign)  => setRevSign(revsign.target.value)} />
              <Label htmlFor="r2">	&gt;</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="<" id="r3" onClick={(revsign)  => setRevSign(revsign.target.value)}/>
              <Label htmlFor="r3">&lt;</Label>
            </div>
          </RadioGroup>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="assets" className="text-right">
                Assets
              </Label>
              <Input id="c" placeholder="Enter Asset Amount" value={assets} onChange={(e) => setAss(e.target.value)} className="col-span-3" />
            </div>
          </div>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="=" id="r1" onClick={(assSign)  => setAssSign(assSign.target.value)}/>
              <Label htmlFor="r1">=</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value=">" id="r2" onClick={(assSign)  => setAssSign(assSign.target.value)} />
              <Label htmlFor="r2">	&gt;</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="<" id="r3" onClick={(assSign)  => setAssSign(assSign.target.value)}/>
              <Label htmlFor="r3">&lt;</Label>
            </div>
          </RadioGroup>
          </div>)
        case "foundation":
          return(<div>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="given" className="text-right">
                Given
              </Label>
              <Input type="text" id="given" placeholder="Enter Amount Given" value={given} onChange={(e) => setGiven(e.target.value)} className="col-span-3"  />
            </div>
            <RadioGroup className="inline-block">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="=" id="r1" onClick={(giveSign)  => setGiveSign(giveSign.target.value)}/>
              <Label htmlFor="r1">=</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value=">" id="r2" onClick={(giveSign)  => setGiveSign(giveSign.target.value)} />
              <Label htmlFor="r2">	&gt;</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="<" id="r3" onClick={(giveSign)  => setGiveSign(giveSign.target.value)}/>
              <Label htmlFor="r3">&lt;</Label>
            </div>
          </RadioGroup>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="assets" className="text-right">
                Assets
              </Label>
              <Input id="c" placeholder="Enter Asset Amount" value={assets} onChange={(e) => setAss(e.target.value)} className="col-span-3" />
            </div>
          </div>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="=" id="r1" onClick={(assSign)  => setAssSign(assSign.target.value)}/>
              <Label htmlFor="r1">=</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value=">" id="r2" onClick={(assSign)  => setAssSign(assSign.target.value)} />
              <Label htmlFor="r2">	&gt;</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="<" id="r3" onClick={(assSign)  => setAssSign(assSign.target.value)}/>
              <Label htmlFor="r3">&lt;</Label>
            </div>
          </RadioGroup>
          </div>)
        case "both":
          return(<div>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="revenue" className="text-right">
                Revenue
              </Label>
              <Input type="text" id="revenue" placeholder="Enter Revenue Amount" value={rev} onChange={(e) => setRev(e.target.value)} className="col-span-3"  />
            </div>
            <RadioGroup className="inline-block">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="=" id="r1" onClick={(revsign)  => setRevSign(revsign.target.value)}/>
              <Label htmlFor="r1">=</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value=">" id="r2" onClick={(revsign)  => setRevSign(revsign.target.value)} />
              <Label htmlFor="r2">	&gt;</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="<" id="r3" onClick={(revsign)  => setRevSign(revsign.target.value)}/>
              <Label htmlFor="r3">&lt;</Label>
            </div>
          </RadioGroup>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="given" className="text-right">
                Given
              </Label>
              <Input type="text" id="given" placeholder="Enter Amount Given" value={rev} onChange={(e) => setRev(e.target.value)} className="col-span-3"  />
              <RadioGroup className="inline-block">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="=" id="r1" onClick={(giveSign)  => setGiveSign(giveSign.target.value)}/>
              <Label htmlFor="r1">=</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value=">" id="r2" onClick={(giveSign)  => setGiveSign(giveSign.target.value)} />
              <Label htmlFor="r2">	&gt;</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="<" id="r3" onClick={(giveSign)  => setGiveSign(giveSign.target.value)}/>
              <Label htmlFor="r3">&lt;</Label>
            </div>
          </RadioGroup>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="assets" className="text-right">
                Assets
              </Label>
              <Input id="c" placeholder="Enter Asset Amount" value={assets} onChange={(e) => setAss(e.target.value)} className="col-span-3" />
            </div>
          </div>
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="=" id="r1" onClick={(assSign)  => setAssSign(assSign.target.value)}/>
              <Label htmlFor="r1">=</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value=">" id="r2" onClick={(assSign)  => setAssSign(assSign.target.value)} />
              <Label htmlFor="r2">	&gt;</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="<" id="r3" onClick={(assSign)  => setAssSign(assSign.target.value)}/>
              <Label htmlFor="r3">&lt;</Label>
            </div>
          </RadioGroup>
          </div>)
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
      <div>{whatSelected(selection)}</div>
    </RadioGroup>
  )
}
