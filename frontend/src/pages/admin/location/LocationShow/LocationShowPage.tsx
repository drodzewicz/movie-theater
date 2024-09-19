import { useParams } from "react-router-dom";
import { useGetLocation } from "@/service/locations/useGetLocation";
import LocationShowHeader from "./LocationShowHeader";
import LocationShowControls from "./LocationShowControls";
import LocationShowScreenings from "./LocationShowScreenings";
import LocationShowHalls from "./LocationShowHalls";

const LocationShowPage = () => {
    const { locationId = "" } = useParams<{ locationId: string }>();

    const { data: location } = useGetLocation(locationId);

    return (
        <div className="container flex-col">
            <LocationShowHeader location={location} />
            <LocationShowControls />
            <LocationShowHalls />
            <LocationShowScreenings />
        </div>
    );
};

export default LocationShowPage;
