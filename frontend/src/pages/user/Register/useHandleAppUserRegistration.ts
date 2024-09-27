import registerFormSchema, {
    RegisterUserSchemaType,
} from "@/pages/user/register/registerFormSchema";
import { useRegister } from "@/service/auth/useRegisterUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type HandleAppUserRegistrationProps = {
    onSuccess?: () => void;
    onError?: () => void;
};

function useHandleAppUserRegistration(props?: HandleAppUserRegistrationProps) {
    const form = useForm<RegisterUserSchemaType>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
    });

    const { mutate: register } = useRegister({
        onSuccess: () => {
            props?.onSuccess?.();
        },
        onError: () => {
            props?.onError?.();
        },
    });

    function onSubmit(values: RegisterUserSchemaType) {
        register({
            username: values.username,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
        });
    }

    return { form, onSubmit };
}

export default useHandleAppUserRegistration;
