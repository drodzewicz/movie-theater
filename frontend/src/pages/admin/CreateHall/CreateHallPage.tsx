import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import createHallFormSchema, { CreateHallSchemaType } from "./createHallFormSchema";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import HallSeatsEditor from "@/components/HallSeatsEditor/HallSeatsEditor";

const CreateHallPage = () => {
    const form = useForm<CreateHallSchemaType>({
        resolver: zodResolver(createHallFormSchema),
        defaultValues: {
            name: "",
            floor: "",
            room: "",
        },
    });

    function onSubmit(values: CreateHallSchemaType) {
        console.log(values);
    }

    return (
        <div className="container h-screen w-screen flex-col justify-center">
            <div className="flex gap-3 my-3 ">
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
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-4 gap-2">
                        <InputField name="name" control={form.control} placeholder="Hall Name" />
                        <InputField name="floor" control={form.control} placeholder="Floor" />
                        <InputField name="room" control={form.control} placeholder="Room" />

                        <Button variant="default" className="rounded-sm shadow-sm" type="submit">
                            Create
                        </Button>
                    </div>
                </form>
            </Form>
            <HallSeatsEditor />
        </div>
    );
};

export default CreateHallPage;
