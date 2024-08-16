import { cn } from "@/lib/utils";
import { LogIn, ListCheck } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";

const UnauthenticatedUserControlls = () => {
    return (
        <div className="flex gap-2">
            <Link to="/register" className={cn(buttonVariants({ variant: "ghost" }))}>
                <ListCheck className="mr-2 h-4 w-4" />
                Register
            </Link>
            <Link to="/login" className={cn(buttonVariants({ variant: "default" }))}>
                <LogIn className="mr-2 h-4 w-4" />
                Login
            </Link>
        </div>
    );
};

export default UnauthenticatedUserControlls;
