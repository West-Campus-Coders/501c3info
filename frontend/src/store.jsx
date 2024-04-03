import { create } from "zustand"

export const useDataStore = create((set) => ({
    selection: '',
    setSelection: (selection) => set(() => ({selection: selection})),
    operator: '',
    setOperator: (operator) => set(() => ({operator: operator})),
    usState: '',
    setUSState: (usState) => set(() => ({usState: usState})),
    city: '',
    setCity: (city) => set(() => ({city: city.toUpperCase()})),
    assets: 0,
    setAssets: (assets) => set(() => ({assets: assets})),
    ein: '',
    setEIN: (ein) => set(() => ({ein: ein})),
    fetchedData: [],
    setData: (fetchedData) => set(() => ({fetchedData: fetchedData})),
  }))
