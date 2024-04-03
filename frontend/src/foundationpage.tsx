import { useEffect, useState } from "react";
import { useDataStore } from "@/store";
import axios from "axios";
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef, type MRT_Row, MRT_GlobalFilterTextField, MRT_ToggleFiltersButton} from "material-react-table";
import { useMemo } from "react";
import { Box, Button, ListItemIcon, MenuItem, Typography } from "@mui/material";
import {ThemeProvider, createTheme} from '@mui/material/styles'
import { customtheme } from "./themeprovider";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { FileDownload } from "@mui/icons-material";


export default function FoundationPage() {
    const test = createTheme(customtheme)
    const usState = useDataStore((state)=> state.usState)
    const [data, setData] = useState([])
    const city = useDataStore((state) => state.city )
    useEffect(() => {
        fetchData();
    },  []);

    const fetchData = () => {
        if(city == ''){}
        axios.get(`https://501c3api.online/foundation/${usState}`).then((res) => {
            console.log(res);
            setData(res.data);
        }).catch((err) => {
            console.log(err);
        })
        }
        if(city != ''){
            axios.get(`https://501c3api.online/foundation/${usState}/${city}`).then((res) => {
                console.log(res);
                setData(res.data);
            }).catch((err) => {
                console.log(err);
            }) 
        }
        
    
    
    




    
     type Foundations = {
        CITY: string,
        EIN: number,
        NAME: string,
        RETURN_TYPE: string,
        STATE: string,
        TGIVEN: number,
        TASSET: number
    };
    
    const columns = useMemo<MRT_ColumnDef<Foundations>[]>(
        () => [
            {
                accessorKey: 'NAME',
                header: "Business Name",
                enableClickToCopy: true,
                filterVariant: 'autocomplete',
                size: 150,
                Cell: ({ renderedCellValue, row }) => (

                    <Box
      
                      sx={{
      
                        display: 'flex',
      
                        alignItems: 'center',
      
                        gap: '1rem',
      
                      }}
      
                    >
      
                      {/* using renderedCellValue instead of cell.getValue() preserves filter match highlighting */}
      
                      <span>{renderedCellValue}</span>
      
                    </Box>
      
                  ),
      
                },
            {
                accessorKey: 'EIN',
                header: "EIN",
                size: 150,
            },
            {
                accessorKey: 'CITY',
                header: 'City',
                size:150
            },
            {
                accessorKey: 'STATE',
                header: 'State',
                size:150,
            },
            {
                accessorKey: 'TGIVEN',
                filterFn: 'greaterThanOrEqualTo',
                header: 'Amount Given',
                size:150,
                Cell: ({ cell }) => (

                    <Box
      
                      component="span"
      
                      sx={(theme) => ({
      
                        backgroundColor:
      
                          cell.getValue<number>() < 50_000
      
                            ? theme.palette.error.dark
      
                            : cell.getValue<number>() >= 50_000 &&
      
                                cell.getValue<number>() < 75_000
      
                              ? theme.palette.warning.dark
      
                              : theme.palette.success.dark,
      
                        borderRadius: '0.25rem',
      
                        color: '#fff',
      
                        maxWidth: '9ch',
      
                        p: '0.25rem',
      
                      })}
      
                    >
      
                      {cell.getValue<number>()?.toLocaleString?.('en-US', {
      
                        style: 'currency',
      
                        currency: 'USD',
      
                        minimumFractionDigits: 0,
      
                        maximumFractionDigits: 0,
      
                      })}
      
                    </Box>
      
                  ),
      
                },
            {
                accessorKey: 'TASSET',
                filterFn: 'greaterThanOrEqualTo',
                header: "Assets",
                size:150,
                Cell: ({ cell }) => (

                    <Box
      
                      component="span"
      
                      sx={(theme) => ({
      
                        backgroundColor:
      
                          cell.getValue<number>() < 50_000
      
                            ? theme.palette.error.dark
      
                            : cell.getValue<number>() >= 50_000 &&
      
                                cell.getValue<number>() < 75_000
      
                              ? theme.palette.warning.dark
      
                              : theme.palette.success.dark,
      
                        borderRadius: '0.25rem',
      
                        color: '#fff',
      
                        maxWidth: '9ch',
      
                        p: '0.25rem',
      
                      })}
      
                    >
      
                      {cell.getValue<number>()?.toLocaleString?.('en-US', {
      
                        style: 'currency',
      
                        currency: 'USD',
      
                        minimumFractionDigits: 0,
      
                        maximumFractionDigits: 0,
      
                      })}
      
                    </Box>
      
                  ),
      
                },
        ],
        [],
    );
    
    const csvConfig = mkConfig({

        fieldSeparator: ',',
      
        decimalSeparator: '.',
      
        useKeysAsHeaders: true,
      
      });
      
      
      
        const handleExportRows = (rows: MRT_Row<Foundations>[]) => {
      
          const rowData = rows.map((row) => row.original);
      
          const csv = generateCsv(csvConfig)(rowData);
      
          download(csvConfig)(csv);
      
        };
      
      
        const handleExportData = () => {
      
          const csv = generateCsv(csvConfig)(data);
      
          download(csvConfig)(csv);
      
        };
      
      
    
    
    

    const table = useMaterialReactTable({
        columns,
        data,
    enableColumnFilterModes: true,

    enableColumnOrdering: true,

    enableGrouping: true,

    enableColumnPinning: true,

    enableFacetedValues: true,

    enableRowSelection: true,

    initialState: {

      showColumnFilters: true,

      showGlobalFilter: true,

      columnPinning: {

        left: ['mrt-row-expand', 'mrt-row-select'],

        right: ['mrt-row-actions'],

      },

    },

    paginationDisplayMode: 'pages',

    positionToolbarAlertBanner: 'bottom',

    muiSearchTextFieldProps: {

      size: 'small',

      variant: 'outlined',

    },

    muiPaginationProps: {

      color: 'secondary',

      rowsPerPageOptions: [10, 20, 30],

      shape: 'rounded',

      variant: 'outlined',

    },

    renderTopToolbarCustomActions: ({ table }) => (

        <Box
  
          sx={{
  
            display: 'flex',
  
            gap: '16px',
  
            padding: '8px',
  
            flexWrap: 'wrap',
  
          }}
  
        >
  
          <Button
  
            //export all data that is currently in the table (ignore pagination, sorting, filtering, etc.)
  
            onClick={handleExportData}
  
            startIcon={<FileDownload />}
  
          >
  
            Export All Data
  
          </Button>
  
          <Button
  
            disabled={table.getPrePaginationRowModel().rows.length === 0}
  
            //export all rows, including from the next page, (still respects filtering and sorting)
  
            onClick={() =>
  
              handleExportRows(table.getPrePaginationRowModel().rows)
  
            }
  
            startIcon={<FileDownload />}
  
          >
  
            Export All Rows
  
          </Button>
  
          <Button
  
            disabled={table.getRowModel().rows.length === 0}
  
            //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
  
            onClick={() => handleExportRows(table.getRowModel().rows)}
  
            startIcon={<FileDownload />}
  
          >
  
            Export Page Rows
  
          </Button>
  
          <Button
  
            disabled={
  
              !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
  
            }
  
            //only export selected rows
  
            onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
  
            startIcon={<FileDownload />}
  
          >
  
            Export Selected Rows
  
          </Button>
  
        </Box>
    ),



});

    

    return (
            <ThemeProvider theme={test}>
            <MaterialReactTable table={table}/>
            </ThemeProvider>
        
       );
}