import { useParams } from "react-router-dom";

export function useGetParamsLocationId() {
    const { locationId = "" } = useParams<{ locationId: string }>();
    return locationId;
}
