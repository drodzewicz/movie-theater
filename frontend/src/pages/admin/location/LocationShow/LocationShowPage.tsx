import LocationShowHeader from "@/pages/admin/location/LocationShow/LocationShowHeader";
import LocationShowControls from "@/pages/admin/location/LocationShow/Controls/LocationShowControls";
import LocationShowScreenings from "@/pages/admin/location/LocationShow/LocationShowScreenings";
import LocationShowHalls from "@/pages/admin/location/LocationShow/LocationShowHalls";

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
