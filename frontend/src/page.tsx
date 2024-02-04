import { Nonprofits, Foundations, npcolumns, fncolumns } from "./components/custom/data/coulmns";
import { DataTable } from "./components/custom/data/data-table";
import { useDataStore } from "@/store";

export default async function DemoPage() {
    const fetchedData = useDataStore((state) => state.fetchedData )
    return(
        <div className="container mx-auto py-10">
            <p>{fetchedData}</p>
        </div>
    )
}