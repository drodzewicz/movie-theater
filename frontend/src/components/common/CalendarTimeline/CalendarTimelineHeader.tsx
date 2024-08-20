import DatePicker from "@/components/input/DatePicker";
import CreateScreeningDialog from "@/pages/admin/screening/CreateScreening/CreateScreeningDialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CalendarTimelineHeader() {
    return (
        <div className="bg-slate-50 flex justify-between p-4">
            <Button variant="ghost" size="sm">
                Today: July 4, 2024
            </Button>
            <div className="flex gap-2">
                <Button variant="outline" size="icon">
                    <ChevronLeft />
                </Button>
                <DatePicker />
                <Button variant="outline" size="icon">
                    <ChevronRight />
                </Button>
                <CreateScreeningDialog />
            </div>
        </div>
    );
}

export default CalendarTimelineHeader;
