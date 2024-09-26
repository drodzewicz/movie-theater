import schema, { CreateUserSchemaType } from "@/pages/admin/user/user-create/createUserFormSchema";
import { useRegister } from "@/service/auth/useRegisterUser";
import { usersKeys } from "@/service/query-keys";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

type HandleRegisterAppUserProps = {
    onSuccess?: () => void;
    onError?: () => void;
};

function useHandleRegisterAppUser(props?: HandleRegisterAppUserProps) {
    const queryClient = useQueryClient();

    const form = useForm<CreateUserSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
        },
    });

    const { mutate: registerUser } = useRegister({
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: usersKeys.listAppUser() });
            props?.onSuccess?.();
        },
        onError: () => {
            props?.onError?.();
        },
    });

    function onSubmit(values: CreateUserSchemaType) {
        registerUser({
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
            username: values.username,
        });
    }

    return { form, onSubmit };
}

export default useHandleRegisterAppUser;
