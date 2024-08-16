import { Popover } from "@/components/ui/popover";
import LocationChooserContent from "./LocationChooserContent";
import LocationChooserButton from "./LocationChooserButton";

const LocationChooser = () => {
    return (
        <Popover>
            <LocationChooserButton locationName="some lcoations" />
            <LocationChooserContent />
        </Popover>
    );
};

export default LocationChooser;
