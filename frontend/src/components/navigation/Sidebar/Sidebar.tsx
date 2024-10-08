import SideNav from "@/components/navigation/sidebar/SideNav";

import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import navItems from "@/routes/ManagerNavItems";
import useToggle from "@/hooks/useToggle";

interface SidebarProps {
    className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
    const { value: isOpen, toggle } = useToggle();

    return (
        <nav
            className={cn(
                "relative hidden h-screen border-r pt-5 md:block duration-500",
                isOpen ? "w-72" : "w-[78px]",
                className
            )}
        >
            <ArrowLeft
                className={cn(
                    "absolute -right-3 top-3 cursor-pointer rounded-full border bg-background text-3xl text-foreground",
                    !isOpen && "rotate-180"
                )}
                onClick={toggle}
            />
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <SideNav
                        isOpen={isOpen}
                        className="text-background opacity-0 transition-all duration-300 group-hover:z-50 group-hover:ml-4 group-hover:rounded group-hover:bg-foreground group-hover:p-2 group-hover:opacity-100"
                        items={navItems}
                    />
                </div>
            </div>
        </nav>
    );
}
