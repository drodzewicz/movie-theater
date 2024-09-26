import { Button } from "@/components/ui/button";
import FormWrapper from "@/components/form/FormWrapper";
import ReactPlayer from "react-player";
import { useGoTo } from "@/hooks/useGoTo";
import useHandleCreateMovie from "./useHandleCreateMovie";
import FieldWrapper from "@/components/form/FieldWrapper";
import { Input } from "@/components/ui/input";
import DatePicker from "@/components/input/DatePicker";

function CreateMoviePage() {
    const goTo = useGoTo();

    const { form, onSubmit } = useHandleCreateMovie({
        onSuccess: () => {
            goTo("/movies");
        },
    });

    return (
        <div className="container grid h-screen w-screen flex-col justify-center">
            <div className="w-72 mt-5">
                <FormWrapper form={form} onSubmit={onSubmit} className="space-y-8">
                    <div className="grid gap-2">
                        <FieldWrapper
                            control={form.control}
                            name="title"
                            render={(field) => (
                                <Input
                                    placeholder="Title"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <FieldWrapper
                            control={form.control}
                            name="description"
                            render={(field) => (
                                <Input
                                    placeholder="Description"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <FieldWrapper
                            control={form.control}
                            name="duration"
                            render={(field) => (
                                <Input
                                    placeholder="Duration"
                                    type="number"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <FieldWrapper
                            control={form.control}
                            name="releaseDate"
                            render={(field) => (
                                <DatePicker value={field.value} onChange={field.onChange} />
                            )}
                        />
                        <FieldWrapper
                            control={form.control}
                            name="posterUrl"
                            render={(field) => (
                                <Input
                                    placeholder="Poster Url"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <FieldWrapper
                            control={form.control}
                            name="trailerUrl"
                            render={(field) => (
                                <Input
                                    placeholder="Trailer Url"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <ReactPlayer url={form.getValues("trailerUrl")} />
                        <Button variant="default" className="rounded-sm shadow-sm" type="submit">
                            Create
                        </Button>
                    </div>
                </FormWrapper>
            </div>
        </div>
    );
}

export default CreateMoviePage;
