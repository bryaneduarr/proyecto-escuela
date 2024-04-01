import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import { Input, InputProps } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as PhoneInput from "react-phone-number-input";
import * as React from "react";
import flags from "react-phone-number-input/flags";

type CountrySelectProps = {
  disabled?: boolean;
  value: PhoneInput.Country;
  onChange: (value: PhoneInput.Country) => void;
  options: CountrySelectOption[];
};

type CountrySelectOption = { label: string; value: PhoneInput.Country };

type PhoneInputProps = React.ComponentProps<typeof PhoneInput.default>;

export type PhoneInputValue = PhoneInput.Value;

const PhoneInputComponent = ({
  className,
  children,
  ...props
}: PhoneInputProps) => (
  <PhoneInput.default
    className={cn("flex", className)}
    placeholder={"Ingrese un numero telefonico"}
    flagComponent={FlagComponent}
    countrySelectComponent={CountrySelect}
    inputComponent={InputComponent}
    {...props}
  />
);

PhoneInputComponent.displayName = "PhoneInput";

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <Input
      className={cn("rounded-s-none rounded-e-lg", className)}
      {...props}
      ref={ref}
    />
  )
);

InputComponent.displayName = "InputComponent";

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = React.useCallback(
    (country: PhoneInput.Country) => {
      onChange(country);
    },
    [onChange]
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant={"outline"}
          className={cn("rounded-e-none rounded-s-lg pl-3 pr-1 flex gap-1")}
          disabled={disabled}
        >
          <span className="flex items-center truncate">
            <div className="bg-foreground/20 rounded-sm flex w-6 h-4">
              {value && <FlagComponent country={value} countryName={value} />}
            </div>
          </span>
          <ChevronsUpDown className={`h-4 w-4 ${disabled ? "hidden" : ""}`} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search country..." />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {options
                .filter((x) => x.value)
                .map((option) => (
                  <CommandItem
                    className={"text-sm gap-2"}
                    key={option.value}
                    onSelect={() => handleSelect(option.value)}
                  >
                    <FlagComponent
                      country={option.value}
                      countryName={option.label}
                    />
                    <span>{option.label}</span>
                    <span className="text-foreground/50">
                      {`+${PhoneInput.getCountryCallingCode(option.value)}`}
                    </span>
                    <CheckIcon
                      className={`ml-auto h-4 w-4 ${
                        option.value === value ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

const FlagComponent = ({ country, countryName }: PhoneInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span
      className={"inline object-contain w-6 h-4 overflow-hidden rounded-sm"}
    >
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInputComponent };
