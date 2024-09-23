import { Button } from "@/components/ui/button";
import { useGetParamsLocationId } from "@/hooks/useGetParamsLocationId";
import { useLocation } from "@/service/locations/useLocation";
import { useUpdateLocationStatus } from "@/service/locations/useUpdateLocationStatus";
import { useQueryClient } from "@tanstack/react-query";
import { locationKeys } from "@/service/query-keys";

function DeactivateLocationButton() {
    const locationId = useGetParamsLocationId();
    const queryClient = useQueryClient();

    const { data: location } = useLocation(locationId);
    const { mutate: updateLocationStatus } = useUpdateLocationStatus(locationId, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: locationKeys.item(locationId) });
        },
    });

    const toggleLocationStatus = () => {
        const currentStatus = location?.active;
        updateLocationStatus(!currentStatus);
    };

    return (
        <Button variant="outline" size="sm" onClick={toggleLocationStatus}>
            {location?.active ? "Deactivate" : "Activate"}
        </Button>
    );
}

export default DeactivateLocationButton;
