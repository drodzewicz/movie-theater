import {
    ArrowUpCircle,
    CheckCircle2,
    Circle,
    HelpCircle,
    LucideIcon,
    XCircle,
    MapPinIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

type Status = {
    value: string;
    label: string;
    icon: LucideIcon;
};

const statuses: Status[] = [
    {
        value: "backlog",
        label: "Backlog",
        icon: HelpCircle,
    },
    {
        value: "todo",
        label: "Todo",
        icon: Circle,
    },
    {
        value: "in progress",
        label: "In Progress",
        icon: ArrowUpCircle,
    },
    {
        value: "done",
        label: "Done",
        icon: CheckCircle2,
    },
    {
        value: "canceled",
        label: "Canceled",
        icon: XCircle,
    },
];

export function LocationSelector() {
    const [open, setOpen] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);

    return (
        <div className="flex items-center space-x-4">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button variant="outline" size="default" className=" justify-start">
                        {selectedStatus ? (
                            <>
                                <selectedStatus.icon className="mr-2 h-4 w-4 shrink-0" />
                                {selectedStatus.label}
                            </>
                        ) : (
                            <>
                                <MapPinIcon className="mr-2 h-4 w-4 shrink-0" /> Choose Location
                            </>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" side="bottom" align="start">
                    <Command>
                        <CommandInput placeholder="Change status..." />
                        <CommandList>
                            <CommandEmpty>No Locations Available.</CommandEmpty>
                            <CommandGroup>
                                {statuses.map((status) => (
                                    <CommandItem
                                        key={status.value}
                                        value={status.value}
                                        onSelect={(value) => {
                                            setSelectedStatus(
                                                statuses.find(
                                                    (priority) => priority.value === value
                                                ) || null
                                            );
                                            setOpen(false);
                                        }}
                                    >
                                        <status.icon
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                status.value === selectedStatus?.value
                                                    ? "opacity-100"
                                                    : "opacity-40"
                                            )}
                                        />
                                        <span>{status.label}</span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
}
export default LocationSelector;
