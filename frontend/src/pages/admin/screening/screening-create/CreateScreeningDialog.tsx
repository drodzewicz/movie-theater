import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
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
import useDialogState from "@/hooks/useDialogState";
import useHandleCreateScreening from "./useHandleCreateScreening";
import {
    transformHallsToOptions,
    transformLocationsToOptions,
    transformMoviesToOptions,
} from "@/lib/utils";

const CreateScreeningDialog = () => {
    const { isOpen, setIsOpen, close, open } = useDialogState();

    const { form, onSubmit } = useHandleCreateScreening({
        onSuccess: () => {
            close();
        },
    });

    const selectedLocation = form.watch("location");

    const { data: movies } = useMovieList<FilterOption[]>(
        { pagination: { pageSize: 100, pageIndex: 0 } },
        {
            select: ({ data }) => transformMoviesToOptions(data),
        }
    );

    const { data: locations } = useLocationList<FilterOption[]>(
        { pagination: { pageSize: 100, pageIndex: 0 } },
        {
            select: ({ data }) => transformLocationsToOptions(data),
        }
    );

    const { data: halls } = useHallList<FilterOption[]>(
        {
            pagination: { pageSize: 100, pageIndex: 0 },
            columnFilters: [{ id: "location", value: selectedLocation }],
        },
        {
            select: ({ data }) => transformHallsToOptions(data),
        }
    );
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Button onClick={open} variant="default" size="sm">
                Create Screening
            </Button>
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
