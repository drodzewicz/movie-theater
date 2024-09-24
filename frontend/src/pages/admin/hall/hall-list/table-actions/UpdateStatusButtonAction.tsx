import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useUpdateHallStatus } from "@/service/halls/useUpdateHallStatus";
import { hallKeys } from "@/service/query-keys";
import { useQueryClient } from "@tanstack/react-query";

type UpdateStatusButtonAction = {
    hallId: string;
    isActive: boolean;
};

function UpdateStatusButtonAction({ hallId, isActive }: UpdateStatusButtonAction) {
    const queryClient = useQueryClient();

    const { mutate: updateStatus } = useUpdateHallStatus(hallId, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: hallKeys.list() });
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
