import { Column } from "@tanstack/react-table";

export interface CommonFilter<TData, TValue> {
    column: Column<TData, TValue>;
}
