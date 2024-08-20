import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

interface LinkButtonProps extends ButtonProps {
    to: string;
}

function LinkButton({ to, className, variant, size, children }: LinkButtonProps) {
    return (
        <Link to={to} className={cn(buttonVariants({ variant, size, className }))}>
            {children}
        </Link>
    );
}

export default LinkButton;
