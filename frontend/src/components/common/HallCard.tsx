import { ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LinkButton from "@/components/common/LinkButton";

const HallCard = () => {
    return (
        <Card className="w-64">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium w-full">
                    <div className="flex justify-between">
                        <span> Hall-H</span>
                        <Badge variant="outline" className="gap-1">
                            <span className="rounded-full h-3 w-3 bg-green-600"></span>
                            Active
                        </Badge>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">floor: 2, room: 11</p>
                <LinkButton to="/halls/23" variant="link" className="p-0 h-5 mr-2">
                    more <ChevronRight className="h-4 w-4" />
                </LinkButton>
            </CardContent>
        </Card>
    );
};

export default HallCard;
