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
import { useHallList } from "@/service/halls/useHallList";
import { useMovieList } from "@/service/movies/useMovieList";
import useDialogState from "@/hooks/useDialogState";
import useHandleCreateScreening from "./useHandleCreateScreening";
import {
    transformHallsToOptions,
    transformLocationsToOptions,
    transformMoviesToOptions,
} from "@/lib/utils";
import FieldWrapper from "@/components/form/FieldWrapper";
import DropDown from "@/components/input/DropDown";
import DatePicker from "@/components/input/DatePicker";

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
                                <FieldWrapper
                                    control={form.control}
                                    name="movie"
                                    render={(field) => (
                                        <DropDown
                                            placeholder="Movie"
                                            value={field.value}
                                            onChange={field.onChange}
                                            options={movies}
                                        />
                                    )}
                                />
                                <FieldWrapper
                                    control={form.control}
                                    name="location"
                                    render={(field) => (
                                        <DropDown
                                            placeholder="Location"
                                            value={field.value}
                                            onChange={field.onChange}
                                            options={locations}
                                        />
                                    )}
                                />
                                <FieldWrapper
                                    control={form.control}
                                    name="hall"
                                    render={(field) => (
                                        <DropDown
                                            disabled={!selectedLocation}
                                            placeholder="Hall"
                                            value={field.value}
                                            onChange={field.onChange}
                                            options={halls}
                                        />
                                    )}
                                />
                                <FieldWrapper
                                    control={form.control}
                                    name="hall"
                                    render={(field) => (
                                        <DatePicker value={field.value} onChange={field.onChange} />
                                    )}
                                />
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
