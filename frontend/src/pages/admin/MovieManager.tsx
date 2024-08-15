import DataTable from "@/components/ExampleDataTable/DataTable";
import { Task } from "@/components/ExampleDataTable/schema";
import { columns } from "@/components/ExampleDataTable/Columns";

const data: Task[] = [
    {
        id: "TASK-8782",
        title: "You can't compress the program without quantifying the open-source SSD pixel!",
        status: "in progress",
        label: "documentation",
        priority: "medium",
    },
    {
        id: "TASK-7878",
        title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
        status: "backlog",
        label: "documentation",
        priority: "medium",
    },
    {
        id: "TASK-7839",
        title: "We need to bypass the neural TCP card!",
        status: "todo",
        label: "bug",
        priority: "high",
    },
    {
        id: "TASK-5562",
        title: "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
        status: "backlog",
        label: "feature",
        priority: "medium",
    },
    {
        id: "TASK-8686",
        title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
        status: "canceled",
        label: "feature",
        priority: "medium",
    },
    {
        id: "TASK-1280",
        title: "Use the digital TLS panel, then you can transmit the haptic system!",
        status: "done",
        label: "bug",
        priority: "high",
    },
    {
        id: "TASK-7262",
        title: "The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!",
        status: "done",
        label: "feature",
        priority: "high",
    },
];

const MovieManager = () => {
    return (
        <div className="container">
            <DataTable data={data} columns={columns} />
        </div>
    );
};

export default MovieManager;
