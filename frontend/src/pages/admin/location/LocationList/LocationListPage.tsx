import Table, { DataTablePagination } from "@/components/common/Table";

import { columns } from "@/pages/admin/location/LocationList/columns";

import LocationTableFilters from "@/pages/admin/location/LocationList/LocationTableFilters";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTable } from "@/hooks/table/useTable";

const data = [
    {
        id: "1aa",
        active: true,
        indentifier: "LT-VNO-AR",
        country: "Lithuania",
        city: "Vilnius",
        streetName: "Architektu",
        buildingNumber: "4",
        zipCode: "23",
    },
    {
        id: "123",
        active: true,
        indentifier: "LT-KAU-AR",
        country: "Lithuania",
        city: "Kaunas",
        streetName: "Kudirkos",
        buildingNumber: "5",
        zipCode: "2323",
    },
    {
        id: "1afda",
        active: true,
        indentifier: "PL-WRO-JAK",
        country: "Poland",
        city: "Wrocalw",
        streetName: "Jakastam",
        buildingNumber: "12",
        zipCode: "43423",
    },
    {
        id: "1",
        active: false,
        indentifier: "PL-WAR-SW",
        country: "Poland",
        city: "Warsaw",
        streetName: "swietkoszyska",
        buildingNumber: "23",
        zipCode: "1235",
    },
    {
        id: "1",
        active: true,
        indentifier: "PL-GD-KOL",
        country: "Poland",
        city: "Gdansk",
        streetName: "Kolobrzeska",
        buildingNumber: "11",
        zipCode: "6542",
    },
];

function LocationListPage() {
    const { table } = useTable({ data, columns });

    return (
        <div className="container mx-auto py-10 flex flex-col gap-3">
            <Link
                to="/locations/create"
                className={cn(buttonVariants({ variant: "default" }), "ml-auto mr-0")}
            >
                Create new lcoation
            </Link>
            <LocationTableFilters table={table} />
            <Table table={table} />
            <DataTablePagination table={table} />
        </div>
    );
}

export default LocationListPage;
