import { cn, interpolateUrl } from "@/lib/utils";
import { Link } from "react-router-dom";
import { ButtonProps, buttonVariants } from "@/components/ui/button";
import { AppRoutes } from "@/routes/routes";
import { useMemo } from "react";

interface LinkButtonProps extends ButtonProps {
    to: AppRoutes;
    variables?: Record<string, string>;
}

function LinkButton({ to, variables, className, variant, size, children }: LinkButtonProps) {
    const link = useMemo(() => {
        return to.includes(":") ? interpolateUrl(to, variables, { prefix: ":" }) : to;
    }, [to, variables]);

    return (
        <Link to={link} className={cn(buttonVariants({ variant, size, className }))}>
            {children}
        </Link>
    );
}

export default LinkButton;
