import {
    UsersIcon,
    LayoutDashboard,
    MapPinIcon,
    MapPinPlusIcon,
    List,
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
        color: "text-sky-800",
    },
    {
        title: "Location",
        icon: MapPinIcon,
        href: "/locations",
        color: "text-sky-800",
        isChidren: true,
        children: [
            {
                title: "Location list",
                icon: List,
                color: "text-sky-400",
                href: "/locations",
            },
            {
                title: "Create new location",
                icon: MapPinPlusIcon,
                color: "text-sky-400",
                href: "/locations/create",
            },
        ],
    },
    {
        title: "Halls",
        icon: SquareActivity,
        href: "/halls",
        color: "text-sky-800",
    },
    {
        title: "Users",
        icon: UsersIcon,
        href: "/users",
        color: "text-sky-800",
        isChidren: true,
        children: [
            {
                title: "User list",
                icon: List,
                color: "text-sky-400",
                href: "/users",
            },
            {
                title: "Manager list",
                icon: ShieldCheck,
                color: "text-sky-400",
                href: "/users/managers",
            },
        ],
    },
    {
        title: "Movies",
        icon: PopcornIcon,
        href: "/movies",
        color: "text-sky-800",
        isChidren: true,
        children: [
            {
                title: "Movie list",
                icon: List,
                color: "text-sky-400",
                href: "/movies",
            },
            {
                title: "Add New Movie",
                icon: PlusCircleIcon,
                color: "text-sky-400",
                href: "/movies/create",
            },
        ],
    },
    {
        title: "Orders",
        icon: ListCheck,
        href: "/orders",
        color: "text-sky-800",
    },
    {
        title: "Screening",
        icon: VideoIcon,
        href: "/screenings",
        color: "text-sky-800",
    },
];

export default navItems;
