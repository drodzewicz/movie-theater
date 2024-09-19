import CalendarTimeline from "@/components/common/CalendarTimeline";

function LocationShowScreenings() {
    return (
        <div className="mt-2">
            <div className="flex justify-between">
                <h2 className="text-3xl font-bold mb-2">Screenings</h2>
            </div>
            <CalendarTimeline />
        </div>
    );
}

export default LocationShowScreenings;
