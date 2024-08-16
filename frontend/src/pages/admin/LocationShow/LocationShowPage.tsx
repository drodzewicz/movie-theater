import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import HallCard from "@/components/HallCard/HallCard";

const LocationShowPage = () => {
    return (
        <div className="container flex-col">
            <div className="flex items-start mt-4 w-full gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>LT-VNO-SA</CardTitle>
                        <CardDescription>
                            <Badge variant="outline" className="gap-1">
                                <span className="rounded-full h-3 w-3 bg-green-600"></span>
                                Active
                            </Badge>
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card>
                    <CardContent className="grid grid-cols-4 gap-4">
                        <div>
                            <Label>Country:</Label>
                            <p>Lithuania</p>
                        </div>
                        <div>
                            <Label>City:</Label>
                            <p>Vilnius</p>
                        </div>
                        <div>
                            <Label>Building Number:</Label>
                            <p>44</p>
                        </div>
                        <div>
                            <Label>Zip-Code:</Label>
                            <p>00-2344</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="mt-2">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">Halls</h2>
                    <Button size="sm" variant="default">
                        Create new Hall
                    </Button>
                </div>
                <div className="flex mt-2 gap-2 flex-wrap">
                    <HallCard />
                    <HallCard />
                    <HallCard />
                </div>
            </div>
        </div>
    );
};

export default LocationShowPage;
