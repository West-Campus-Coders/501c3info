import { create } from "zustand"

export const useDataStore = create((set) => ({
    selection: '',
    setSelection: (selection) => set(() => ({selection: selection})),
    operator: '',
    setOperator: (operator) => set(() => ({operator: operator})),
    usState: '',
    setUSState: (usState) => set(() => ({usState: usState})),
    city: '',
    setCity: (city) => set(() => ({city: city})),
    assets: 0,
    setAssets: (assets) => set(() => ({assets: assets})),
    ein: '',
    setEIN: (ein) => set(() => ({ein: ein})),
    data: [],
    setData: (data) => set(() => ({data: data})),
  }))
