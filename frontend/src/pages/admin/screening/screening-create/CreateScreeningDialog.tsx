import { Button, buttonVariants } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import schema, {
    CreateScreeningSchemaType,
} from "@/pages/admin/screening/screening-create/createScreeningFormSchema";
import FormWrapper from "@/components/form/FormWrapper";
import { useLocationList } from "@/service/locations/useLocationList";
import { FilterOption } from "@/types/types";
import { FormField } from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useHallList } from "@/service/halls/useHallList";
import { useMovieList } from "@/service/movies/useMovieList";
import DateField from "@/components/form/DateField";
import { useCreateScreening } from "@/service/screening/useCreateScreening";

const CreateScreeningDialog = () => {
    const form = useForm<CreateScreeningSchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            movie: "",
            hall: "",
            location: "",
            date: null,
        },
    });

    const selectedLocation = form.watch("location");

    const { data: movies } = useMovieList<FilterOption[]>(
        { pagination: { pageSize: 100, pageIndex: 0 } },
        {
            select: ({ data }) =>
                data?.map((it) => ({
                    value: `${it.id}`,
                    label: `${it.title}`,
                })),
        }
    );

    const { data: locations } = useLocationList<FilterOption[]>(
        { pagination: { pageSize: 100, pageIndex: 0 } },
        {
            select: ({ data }) =>
                data?.map((it) => ({
                    value: `${it.id}`,
                    label: `${it.identifier}`,
                })),
        }
    );

    const { data: halls } = useHallList<FilterOption[]>(
        {
            pagination: { pageSize: 100, pageIndex: 0 },
            columnFilters: [{ id: "location", value: selectedLocation }],
        },
        {
            select: ({ data }) =>
                data?.map((it) => ({
                    value: `${it.id}`,
                    label: `${it.name}`,
                })),
        }
    );

    const { mutate: createScreening } = useCreateScreening();

    function onSubmit(values: CreateScreeningSchemaType) {
        console.log(values);
        createScreening({
            movieId: values.movie,
            locationId: values.location,
            hallId: "1",
            date: values.date,
        });
    }

    return (
        <Dialog>
            <DialogTrigger className={cn(buttonVariants({ variant: "default", size: "sm" }))}>
                Create Screening
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create new screening</DialogTitle>
                    <DialogDescription>
                        <FormWrapper form={form} onSubmit={onSubmit} className="space-y-8">
                            <div className="grid gap-2">
                                <FormField
                                    control={form.control}
                                    name="movie"
                                    render={({ field }) => (
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Movie" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {movies.map((it) => (
                                                    <SelectItem key={it.label} value={it.value}>
                                                        {it.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="location"
                                    render={({ field }) => (
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Location" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {locations.map((it) => (
                                                    <SelectItem key={it.label} value={it.value}>
                                                        {it.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="hall"
                                    render={({ field }) => (
                                        <Select
                                            disabled={!selectedLocation}
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Hall" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {halls.map((it) => (
                                                    <SelectItem key={it.label} value={it.value}>
                                                        {it.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                <DateField name="date" control={form.control} />
                                <Button
                                    variant="default"
                                    className="rounded-sm shadow-sm"
                                    type="submit"
                                >
                                    Create
                                </Button>
                            </div>
                        </FormWrapper>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default CreateScreeningDialog;
