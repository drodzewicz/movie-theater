import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useUpdateLocationStatus } from "@/service/locations/useUpdateLocationStatus";
import { locationKeys } from "@/service/query-keys";
import { useQueryClient } from "@tanstack/react-query";

type UpdateStatusButtonAction = {
    locationId: string;
    isActive: boolean;
};

function UpdateStatusButtonAction({ locationId, isActive }: UpdateStatusButtonAction) {
    const queryClient = useQueryClient();

    const { mutate: updateStatus } = useUpdateLocationStatus(locationId, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: locationKeys.list() });
        },
    });

    const toggleLocationStatus = () => updateStatus(!isActive);

    return (
        <DropdownMenuItem onClick={toggleLocationStatus}>
            {isActive ? "Deactivate" : "Activate"}
        </DropdownMenuItem>
    );
}

export default UpdateStatusButtonAction;
