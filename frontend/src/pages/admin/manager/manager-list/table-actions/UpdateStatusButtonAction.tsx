import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { usersKeys } from "@/service/query-keys";
import { useUpdateManagerStatus } from "@/service/users/useUpdateManagerStatus";
import { useQueryClient } from "@tanstack/react-query";

type UpdateStatusButtonAction = {
    managerUsername: string;
    isActive: boolean;
};

function UpdateStatusButtonAction({ managerUsername, isActive }: UpdateStatusButtonAction) {
    const queryClient = useQueryClient();

    const { mutate: updateStatus } = useUpdateManagerStatus(managerUsername, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: usersKeys.listAppManager() });
        },
    });

    const toggleAppManagerStatus = () => updateStatus(!isActive);

    return (
        <DropdownMenuItem onClick={toggleAppManagerStatus}>
            {isActive ? "Deactivate" : "Activate"}
        </DropdownMenuItem>
    );
}

export default UpdateStatusButtonAction;
