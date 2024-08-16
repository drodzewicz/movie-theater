import { PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

const LocationChooserContent = () => {
    return (
        <PopoverContent align="start" className="flex flex-col p-0">
            <ScrollArea className="h-[400px] p-4">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <Label>Lithuania</Label>
                        <Separator />
                        <Button variant="outline" className="rounded-sm shadow-sm" type="submit">
                            Some location
                        </Button>
                        <Button variant="outline" className="rounded-sm shadow-sm" type="submit">
                            Some location 2
                        </Button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Lithuania</Label>
                        <Separator />
                        <Button variant="outline" className="rounded-sm shadow-sm" type="submit">
                            Some location
                        </Button>
                        <Button variant="outline" className="rounded-sm shadow-sm" type="submit">
                            Some location 2
                        </Button>
                    </div>
                </div>
            </ScrollArea>
        </PopoverContent>
    );
};

export default LocationChooserContent;
