import { LogIn, ListCheck } from "lucide-react";
import LinkButton from "@/components/common/LinkButton";

const UnauthenticatedUserControlls = () => {
    return (
        <div className="flex gap-2">
            <LinkButton to="/register" variant="ghost">
                <ListCheck className="mr-2 h-4 w-4" />
                Register
            </LinkButton>
            <LinkButton to="/login" variant="ghost">
                <LogIn className="mr-2 h-4 w-4" />
                Login
            </LinkButton>
        </div>
    );
};

export default UnauthenticatedUserControlls;
