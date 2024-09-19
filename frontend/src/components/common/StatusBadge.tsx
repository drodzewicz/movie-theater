import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
    active: boolean;
};

function StatusBadge({ active }: StatusBadgeProps) {
    return (
        <div>
            <Badge variant="outline" className="gap-1">
                <span
                    className={cn("rounded-full h-3 w-3 ", active ? "bg-green-600" : "bg-gray-500")}
                ></span>
                {active ? "Active" : "Inactive"}
            </Badge>
        </div>
    );
}

export default StatusBadge;
