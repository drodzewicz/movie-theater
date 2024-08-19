import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Button, buttonVariants } from "@/components/ui/button";
import HallCard from "@/components/common/HallCard";
import CalendarTimeline from "@/components/common/CalendarTimeline";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

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
            <div className="flex justify-between bg-slate-50 border p-2 mt-2 rounded-md">
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        Edit Address
                    </Button>
                </div>
                <div className="flex gap-2">
                    <Separator orientation="vertical" />
                    <Button variant="outline" size="sm">
                        Delete
                    </Button>
                    <Button variant="outline" size="sm">
                        Deactivate
                    </Button>
                </div>
            </div>
            <div className="mt-2">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">Halls</h2>
                    <Link
                        to="/halls/create"
                        className={cn(buttonVariants({ variant: "default", size: "sm" }))}
                    >
                        Create new Hall
                    </Link>
                </div>
                <div className="flex mt-2 gap-2 flex-wrap">
                    <HallCard />
                    <HallCard />
                    <HallCard />
                </div>
            </div>
            <div className="mt-2">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold mb-2">Screenings</h2>
                </div>
                <CalendarTimeline />
            </div>
        </div>
    );
};

export default LocationShowPage;
