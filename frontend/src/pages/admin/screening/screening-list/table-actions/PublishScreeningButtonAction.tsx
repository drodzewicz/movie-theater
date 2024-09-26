import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { screeningKeys } from "@/service/query-keys";
import { usePublishScreening } from "@/service/screening/usePublishScreening";
import { useQueryClient } from "@tanstack/react-query";

type PublishScreeningButtonActionProps = {
    screeningId: string;
};

function PublishScreeningButtonAction({ screeningId }: PublishScreeningButtonActionProps) {
    const queryClient = useQueryClient();

    const { mutate: publish } = usePublishScreening(screeningId, {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: screeningKeys.list() });
        },
    });

    return <DropdownMenuItem onClick={() => publish({})}>Publish</DropdownMenuItem>;
}

export default PublishScreeningButtonAction;
