import StatusBadge from "@/components/common/StatusBadge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetParamsLocationId } from "@/hooks/useGetParamsLocationId";
import { useLocation } from "@/service/locations/useLocation";
import { Label } from "@radix-ui/react-label";

function LocationShowHeader() {
    const locationId = useGetParamsLocationId();

    const { data: location } = useLocation(locationId);

    return (
        <div className="flex items-start mt-4 w-full gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>{location?.identifier}</CardTitle>
                    <CardDescription>
                        <StatusBadge active={location?.active} />
                    </CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardContent className="grid grid-cols-4 gap-4">
                    <div>
                        <Label>Country:</Label>
                        <p>{location?.country}</p>
                    </div>
                    <div>
                        <Label>City:</Label>
                        <p>{location?.city}</p>
                    </div>
                    <div>
                        <Label>Building Number:</Label>
                        <p>{location?.buildingNumber}</p>
                    </div>
                    <div>
                        <Label>Zip-Code:</Label>
                        <p>{location?.zipCode}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default LocationShowHeader;
