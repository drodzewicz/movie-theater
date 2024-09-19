import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function LocationShowControls() {
    return (
        <div className="flex justify-between bg-slate-50 border p-2 mt-2 rounded-md">
            <div className="flex gap-2">
                <Button variant="outline" size="sm">
                    Edit Address
                </Button>
            </div>
            <div className="flex gap-2">
                <Separator orientation="vertical" />
                <Button variant="outline" size="sm">
                    Delete
                </Button>
                <Button variant="outline" size="sm">
                    Deactivate
                </Button>
            </div>
        </div>
    );
}

export default LocationShowControls;
