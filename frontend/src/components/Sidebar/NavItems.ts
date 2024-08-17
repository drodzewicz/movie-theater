import { NavItem } from "./types";
import {
    UsersIcon,
    LayoutDashboard,
    MapPinIcon,
    MapPinPlusIcon,
    List,
    UserPlus,
    PopcornIcon,
    PlusCircleIcon,
    ListCheck,
    SquareActivity,
    ShieldCheck,
    VideoIcon,
} from "lucide-react";

const navItems: NavItem[] = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        href: "/",
        color: "text-sky-500",
    },
    {
        title: "Location",
        icon: MapPinIcon,
        href: "/locations",
        color: "text-orange-500",
        isChidren: true,
        children: [
            {
                title: "Location list",
                icon: List,
                color: "text-red-500",
                href: "/locations",
            },
            {
                title: "Create new location",
                icon: MapPinPlusIcon,
                color: "text-red-500",
                href: "/locations/create",
            },
        ],
    },
    {
        title: "Halls",
        icon: SquareActivity,
        href: "/halls",
        color: "text-orange-500",
        isChidren: true,
        children: [
            {
                title: "Hall list",
                icon: List,
                color: "text-red-500",
                href: "/halls",
            },
            {
                title: "Create new Hall",
                icon: MapPinPlusIcon,
                color: "text-red-500",
                href: "/halls/create",
            },
        ],
    },
    {
        title: "Users",
        icon: UsersIcon,
        href: "/users",
        color: "text-orange-500",
        isChidren: true,
        children: [
            {
                title: "User list",
                icon: List,
                color: "text-red-500",
                href: "/users",
            },
            {
                title: "Manager list",
                icon: ShieldCheck,
                color: "text-red-500",
                href: "/users/managers",
            },
            {
                title: "Register new manager",
                icon: UserPlus,
                color: "text-red-500",
                href: "/users/manager/create",
            },
        ],
    },
    {
        title: "Movies",
        icon: PopcornIcon,
        href: "/movies",
        color: "text-orange-500",
        isChidren: true,
        children: [
            {
                title: "Movie list",
                icon: List,
                color: "text-red-500",
                href: "/movies",
            },
            {
                title: "Add New Movie",
                icon: PlusCircleIcon,
                color: "text-red-500",
                href: "/movies/add",
            },
        ],
    },
    {
        title: "Orders",
        icon: ListCheck,
        href: "/orders",
        color: "text-orange-500",
        isChidren: true,
        children: [
            {
                title: "Order list",
                icon: List,
                color: "text-red-500",
                href: "/orders",
            },
            {
                title: "Create New Order",
                icon: PlusCircleIcon,
                color: "text-red-500",
                href: "/orders/create",
            },
        ],
    },
    {
        title: "Screening",
        icon: VideoIcon,
        href: "/screenings",
        color: "text-orange-500",
        isChidren: true,
        children: [
            {
                title: "Order list",
                icon: List,
                color: "text-red-500",
                href: "/screenings",
            },
            {
                title: "Create New Order",
                icon: PlusCircleIcon,
                color: "text-red-500",
                href: "/screenings/create",
            },
        ],
    },
];

export default navItems;
