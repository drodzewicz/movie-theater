import { Row } from "@tanstack/react-table";
import _ from "lodash";
import { format } from "date-fns";

interface DateCellType<T> {
    row: Row<T>;
    accessorKey: string;
    dateFormat?: string;
}

function DateCell<T>({ row, accessorKey, dateFormat = "PPP" }: DateCellType<T>) {
    const value = _.get(row, `original.${accessorKey}`, null);

    return <div>{value ? format(value, dateFormat) : null}</div>;
}

export default DateCell;
