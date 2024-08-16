import { PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export type LocationChooserButtonProps = {
    locationName: string;
};

const LocationChooserButton: React.FC<LocationChooserButtonProps> = ({ locationName }) => {
    return (
        <PopoverTrigger>
            <Button variant="outline" className="rounded-sm shadow-sm" type="submit">
                <MapPin className="mr-2 h-4 w-4" />
                {locationName}
            </Button>
        </PopoverTrigger>
    );
};

export default LocationChooserButton;
