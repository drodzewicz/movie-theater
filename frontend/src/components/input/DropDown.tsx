import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FilterOption } from "@/types/types";

type DropDownProps = {
    onChange?: (value?: string) => void;
    value?: string;
    options: FilterOption[];
    placeholder?: string;
};

function DropDown({ onChange, value, options, placeholder }: DropDownProps) {
    return (
        <Select onValueChange={onChange} defaultValue={value}>
            <SelectTrigger>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default DropDown;
