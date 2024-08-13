import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    const items = [
        { title: "home", href: "/" },
        { title: "login", href: "/login" },
        { title: "register", href: "/register" },
        { title: "locations", href: "/locations" },
        { title: "movies", href: "/movies" },
        { title: "users", href: "/users" },
    ];

    if (!items?.length) {
        return null;
    }

    return (
        <nav className="flex justify-center my-2 gap-2">
            {items.map((item) => {
                // const Icon = Icons[item.icon || "arrowRight"];
                return (
                    <Link
                        to={item.href}
                        key={`${item.title}-${item.href}`}
                        // href={item.disabled ? "/" : item.href}
                    >
                        <span
                            className={cn(
                                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                                // path === item.href ? "bg-accent" : "transparent",
                                // item.disabled && "cursor-not-allowed opacity-80"
                            )}
                        >
                            {/* <Icon className="mr-2 h-4 w-4" /> */}
                            <span>{item?.title}</span>
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}

export default Navbar;
