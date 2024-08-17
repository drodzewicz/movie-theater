import DatePicker from "../DatePicker/DatePicker";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

function CalendarTimelineHeader() {
    return (
        <div className="bg-slate-50 flex justify-between p-4">
            <div>Today: July 4, 2024</div>
            <div className="flex gap-2">
                <DatePicker />
                <Link
                    to="/screenings/create"
                    className={cn(buttonVariants({ variant: "default", size: "sm" }))}
                >
                    Add screening
                </Link>
            </div>
        </div>
    );
}

export default CalendarTimelineHeader;
