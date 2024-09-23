import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHeader,
    TableHead,
} from "@/components/ui/table";

import { ClockIcon } from "lucide-react";
import CalendarScreeningCard from "@/components/common/calendar-timeline/CalendarScreeningCard";
import CalendarTimelineHeader from "@/components/common/calendar-timeline/CalendarTimelineHeader";

const WEEK_DAYS = ["Mon 10", "Tue 11", "Wed 12", "Thu 13", "Fri 14", "Sat 15", "Sun 16"];
const TIME = [
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
];

const DATA = [
    {
        movie: { id: "23", title: "Avengers" },
        date: { day: "Mon 10", time: "13:00" },
        hall: { id: "23", title: "HALL_H" },
    },
    {
        movie: { id: "223", title: "Breaking Bad" },
        date: { day: "Mon 10", time: "15:00" },
        hall: { id: "23", title: "HALL_H" },
    },
    {
        movie: { id: "123", title: "Spider man" },
        date: { day: "Thu 13", time: "12:00" },
        hall: { id: "23", title: "HALL_H" },
    },
];

export default function CalendarTimeline() {
    const getMovieForDate = (day: string, time: string) => {
        const screening = DATA.find(
            (screening) => screening.date.day === day && screening.date.time === time
        );
        if (screening) {
            return <CalendarScreeningCard movieTitle={screening.movie.title} />;
        }

        return null;
    };

    return (
        <div className="rounded-md border">
            <CalendarTimelineHeader />
            <div className="h-[63vh] relative overflow-auto">
                <Table>
                    <TableHeader className="sticky top-0 bg-white shadow-sm">
                        <TableRow>
                            <TableHead>
                                <ClockIcon />
                            </TableHead>
                            {WEEK_DAYS.map((day) => (
                                <TableHead key={day}>{day}</TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {TIME.map((time) => (
                            <TableRow key={time}>
                                <TableCell className="border-r-2">{time}</TableCell>
                                {WEEK_DAYS.map((day) => (
                                    <TableCell key={`${day}-${time}`} className="p-1 min-w-32">
                                        {getMovieForDate(day, time)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
