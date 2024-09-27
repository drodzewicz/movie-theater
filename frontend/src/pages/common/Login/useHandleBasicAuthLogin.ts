import { loginFormSchema, LoginSchemaType } from "@/pages/common/login/loginFormSchema";
import { useLogin } from "@/service/auth/useLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

type HandleBasicAuthLoginProps = {
    onSuccess?: () => void;
    onError?: () => void;
};

function useHandleBasicAuthLogin(props?: HandleBasicAuthLoginProps) {
    const location = useLocation();

    const form = useForm<LoginSchemaType>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            username: location.state?.username || "",
            password: location.state?.password || "",
        },
    });

    const { mutate: login } = useLogin({
        onError() {
            form.setError("username", {
                type: "manual",
                message: "Bad login",
            });
            form.setError("password", {
                type: "manual",
                message: "Bad login",
            });
            props?.onError?.();
        },
        onSuccess: () => {
            props?.onSuccess?.();
        },
    });

    function onSubmit(values: LoginSchemaType) {
        login({ username: values.username, password: values.password });
    }
    return { form, onSubmit };
}

export default useHandleBasicAuthLogin;
