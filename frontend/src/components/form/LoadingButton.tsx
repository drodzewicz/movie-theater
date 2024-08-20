import React from "react";
import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "@/components/ui/button";

export interface LoadingButtonProps extends ButtonProps {
    isLoading?: boolean;
}

function LoadingButton({
    children,
    isLoading,
    ...props
}: React.PropsWithChildren<LoadingButtonProps>) {
    return (
        <Button {...props}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </Button>
    );
}

export default LoadingButton;
