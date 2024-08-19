const ROW_COUNT = 6;
const SEAT_NUMBER = 12;

const HallSeatsEditor = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mt-4">
                <div className="bg-slate-500 text-white flex items-center justify-center h-4 mb-10 ">
                    Screen
                </div>
                <div className="mt-4 flex flex-col gap-3">
                    {Array(ROW_COUNT)
                        .fill(null)
                        .map(() => (
                            <div className="flex gap-3">
                                {Array(SEAT_NUMBER)
                                    .fill(null)
                                    .map(() => (
                                        <div className="w-9 h-9 bg-slate-200 rounded-md flex items-center justify-center">
                                            34
                                        </div>
                                    ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default HallSeatsEditor;
