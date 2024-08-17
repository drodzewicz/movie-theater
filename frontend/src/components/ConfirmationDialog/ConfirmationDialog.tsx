import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type ConfirmationDialogProps = {
    title?: string;
    message: string;
    confirmButtonLabel: string;
    cancelButtonLabel: string;
};

function ConfirmationDialog({
    title = "Are you sure?",
    message,
    confirmButtonLabel = "Confirm",
    cancelButtonLabel = "Cancel",
}: ConfirmationDialogProps) {
    return (
        <AlertDialog>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    {message && <AlertDialogDescription>{message}</AlertDialogDescription>}
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{cancelButtonLabel}</AlertDialogCancel>
                    <AlertDialogAction>{confirmButtonLabel}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default ConfirmationDialog;
