import schema, {
    CreateManagerSchemaType,
} from "@/pages/admin/manager/manager-create/createManagerFormSchema";
import { useRegisterAppManager } from "@/service/auth/useRegisterAppManager";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { usersKeys } from "@/service/query-keys";

type HandleNewManagerRegistrationProps = {
    onSuccess?: () => void;
    onError?: () => void;
};

const useHandleNewManagerRegistration = (props?: HandleNewManagerRegistrationProps) => {
    const queryClient = useQueryClient();

    const form = useForm<CreateManagerSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            role: "",
            location: "",
        },
    });

    const { mutate: registerManager } = useRegisterAppManager({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: usersKeys.listAppManager() });
            props?.onSuccess?.();
        },
        onError: () => {
            props?.onError?.();
        },
    });

    const onSubmit = (values: CreateManagerSchemaType) => {
        registerManager({
            firstName: values?.firstName,
            lastName: values?.lastName,
            username: values?.username,
            password: values?.password,
        });
    };

    return { form, onSubmit };
};

export default useHandleNewManagerRegistration;
