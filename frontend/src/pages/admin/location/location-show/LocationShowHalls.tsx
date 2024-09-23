import HallCard from "@/components/common/HallCard";
import LinkButton from "@/components/common/LinkButton";
import { useGetParamsLocationId } from "@/hooks/useGetParamsLocationId";
import { useHallListByLocation } from "@/service/halls/useHallListByLocation";

function LocationShowHalls() {
    const locationId = useGetParamsLocationId();

    const { data: halls } = useHallListByLocation({ locationId });

    return (
        <div className="mt-2">
            <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Halls</h2>
                <LinkButton
                    to="/locations/:locationId/create-hall"
                    variables={{ locationId }}
                    variant="default"
                    size="sm"
                >
                    Create new Hall
                </LinkButton>
            </div>
            <div className="flex mt-2 gap-2 flex-wrap">
                {halls.map((hall) => (
                    <HallCard {...hall} />
                ))}
            </div>
        </div>
    );
}

export default LocationShowHalls;
