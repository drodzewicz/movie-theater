import { Table } from "@tanstack/react-table";
import { Column } from "@tanstack/react-table";

export interface CommonFilter<TData, TValue> {
    column: Column<TData, TValue>;
}

export interface PropsWithTable<TData> {
    table: Table<TData>;
}
