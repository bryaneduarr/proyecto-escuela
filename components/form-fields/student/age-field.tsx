import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Calendar as CalendarIcon } from "lucide-react";
import { FieldProps } from "@/types/global-users";
import { useEffect } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const AgeField = ({ form, student }: FieldProps) => {
  useEffect(() => {
    form.setValue("age.dateOfBirth", student?.age.dateOfBirth!);
  }, [student, form]);

  return (
    <div>
      <FormField
        control={form.control}
        name="age.dateOfBirth"
        render={({ field }) => (
          <div>
            <FormItem className="flex flex-col ">
              <FormLabel>Fecha de nacimiento</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button className="w-full pl-3 text-left font-normal">
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Seleccione una fecha de nacimiento</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    fromYear={1900}
                    toYear={2024}
                    selected={new Date(field.value)}
                    captionLayout="dropdown-buttons"
                    onSelect={(date) => {
                      if (date instanceof Date) {
                        field.onChange(
                          `${(date.getMonth() + 1)
                            .toString()
                            .padStart(2, "0")}/${date
                            .getDate()
                            .toString()
                            .padStart(2, "0")}/${date.getFullYear()}`
                        );
                      }
                    }}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                La fecha de nacimiento es usada para calcular la edad.
              </FormDescription>
            </FormItem>
          </div>
        )}
      />
    </div>
  );
};

export default AgeField;
