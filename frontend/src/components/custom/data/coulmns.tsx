import { ColumnDef } from "@tanstack/react-table";

export type Nonprofits = {
    CITY: string,
    EIN: number,
    NAME: string,
    RETURN_TYPE: string,
    STATE: string,
    TASSET: number,
    TREV: number
}

export type Foundations = {
    CITY: string,
    EIN: number,
    NAME: string,
    RETURN_TYPE: string,
    STATE: string,
    TASSET: number,
    TREV: number
}

export const npcolumns: ColumnDef<Nonprofits>[] = [
    {
        accessorKey: "EIN",
        header: "EIN"
    },
    {
        accessorKey: "NAME",
        header: "Name"
    },
    {
        accessorKey: "CITY",
        header: "City"
    },
    {
        accessorKey: "STATE",
        header: "State"
    },
    {
        accessorKey: "TASSET",
        header: "Total Assets"
    },
    {
        accessorKey: "TREV",
        header: "Total Revenue"
    },
]

export const fncolumns: ColumnDef<Foundations>[] = [
    {
        accessorKey: "EIN",
        header: "EIN"
    },
    {
        accessorKey: "NAME",
        header: "Name"
    },
    {
        accessorKey: "CITY",
        header: "City"
    },
    {
        accessorKey: "STATE",
        header: "State"
    },
    {
        accessorKey: "TASSET",
        header: "Total Assets"
    },
    {
        accessorKey: "TREV",
        header: "Total Revenue"
    },
]