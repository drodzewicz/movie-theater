import { useState } from "react";

function useDialogState(initialValue = false) {
    const [isOpen, setIsOpen] = useState<boolean>(initialValue);

    const toggleOpen = () => setIsOpen((state) => !state);

    const open = () => setIsOpen(true);

    const close = () => setIsOpen(false);

    return { isOpen, setIsOpen, toggleOpen, open, close };
}

export default useDialogState;
