import { Button, buttonVariants } from "../ui/button";
import { XIcon } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
// const sidebarConfig = [
//     {
//         label: "Location",
//         items: [
//             {
//                 label: "Location List",
//                 to: "/locations",
//                 icon: "wdwd",
//             },
//             {
//                 label: "Create Location",
//                 to: "/locations/create",
//                 icon: "wdwd",
//             },
//         ],
//     },
//     {
//         label: "User",
//         items: [
//             {
//                 label: "User List",
//                 to: "/users",
//                 icon: "wdwd",
//             },
//             {
//                 label: "Register User",
//                 to: "/users/create",
//                 icon: "wdwd",
//             },
//         ],
//     },
// ];

const Sidebar = () => {
    return (
        <div>
            <div className="bg-white shadow-lg w-52 h-screen absolute top-0 z-20 flex flex-col p-2">
                <Button variant="ghost" className="mr-0 ml-auto">
                    <XIcon />
                </Button>
                <div className="flex flex-col gap-4">
                    <Label>Location</Label>
                    <Separator />
                    <Link className={cn(buttonVariants({ variant: "ghost" }))} to="/locations">
                        List
                    </Link>
                    <Link
                        to="/locations/create"
                        className={cn(buttonVariants({ variant: "ghost" }))}
                    >
                        Create new
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <Label>Halls</Label>
                    <Separator />
                    <Link className={cn(buttonVariants({ variant: "ghost" }))} to="/halls">
                        List
                    </Link>
                    <Link to="/halls/create" className={cn(buttonVariants({ variant: "ghost" }))}>
                        Create new
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <Label>Users</Label>
                    <Separator />
                    <Link className={cn(buttonVariants({ variant: "ghost" }))} to="/users">
                        List
                    </Link>
                    <Link to="/users/create" className={cn(buttonVariants({ variant: "ghost" }))}>
                        Create new
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <Label>Movies</Label>
                    <Separator />
                    <Link className={cn(buttonVariants({ variant: "ghost" }))} to="/movies">
                        List
                    </Link>
                    <Link to="/movies/create" className={cn(buttonVariants({ variant: "ghost" }))}>
                        Create new
                    </Link>
                </div>
                <div className="flex flex-col gap-4">
                    <Label>Orders</Label>
                    <Separator />
                    <Link className={cn(buttonVariants({ variant: "ghost" }))} to="/orders">
                        List
                    </Link>
                    <Link to="/orders/create" className={cn(buttonVariants({ variant: "ghost" }))}>
                        Create new
                    </Link>
                </div>
            </div>
            <div className="fixed inset-0 z-10 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"></div>
        </div>
    );
};

export default Sidebar;
