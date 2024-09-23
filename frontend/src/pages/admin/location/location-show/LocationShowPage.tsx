import LocationShowHeader from "@/pages/admin/location/location-show/LocationShowHeader";
import LocationShowControls from "@/pages/admin/location/location-show/controls/LocationShowControls";
import LocationShowScreenings from "@/pages/admin/location/location-show/LocationShowScreenings";
import LocationShowHalls from "@/pages/admin/location/location-show/LocationShowHalls";

const LocationShowPage = () => {
    return (
        <div className="container flex-col">
            <LocationShowHeader />
            <LocationShowControls />
            <LocationShowHalls />
            <LocationShowScreenings />
        </div>
    );
};

export default LocationShowPage;
