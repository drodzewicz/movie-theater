import { ChevronLeft } from "lucide-react";
import LinkButton from "@/components/common/LinkButton";

const PasswordPage = () => {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"></div>
            <LinkButton to="/login">
                <ChevronLeft /> Back
            </LinkButton>
        </div>
    );
};

export default PasswordPage;
