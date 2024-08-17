import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type CalendarScreeningCardProps = {
    movieTitle: string;
};

function CalendarScreeningCard({ movieTitle }: CalendarScreeningCardProps) {
    return (
        <Card className="bg-orange-100 border-orange-200 w-32">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2">
                <CardTitle className="text-sm font-medium w-full">
                    <div className="flex justify-between">
                        <span> {movieTitle}</span>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between p-2 pt-1">
                <p className="text-xs text-muted-foreground flex">
                    <Calendar className="mr-1 h-3 w-3" />
                    2024-02-13 13:30
                </p>
            </CardContent>
        </Card>
    );
}

export default CalendarScreeningCard;
