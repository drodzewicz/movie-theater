import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { usersKeys } from "@/service/query-keys";
import { useUpdateUserStatus } from "@/service/users/useUpdateUserStatus";
import { useQueryClient } from "@tanstack/react-query";

type UpdateStatusButtonAction = {
    userUsername: string;
    isActive: boolean;
};

function UpdateStatusButtonAction({ userUsername, isActive }: UpdateStatusButtonAction) {
    const queryClient = useQueryClient();

    const { mutate: updateStatus } = useUpdateUserStatus(userUsername, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: usersKeys.listAppUser() });
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
