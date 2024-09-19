import HallCard from "@/components/common/HallCard";
import LinkButton from "@/components/common/LinkButton";
import React from "react";

function LocationShowHalls() {
    return (
        <div className="mt-2">
            <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Halls</h2>
                <LinkButton to="/halls/create" variant="default" size="sm">
                    Create new Hall
                </LinkButton>
            </div>
            <div className="flex mt-2 gap-2 flex-wrap">
                <HallCard />
                <HallCard />
                <HallCard />
            </div>
        </div>
    );
}

export default LocationShowHalls;
