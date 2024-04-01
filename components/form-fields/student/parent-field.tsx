import { parentRelation } from "@/lib/models/students";
import { useFieldArray } from "react-hook-form";
import { FieldProps } from "@/types/global-users";
import { FormLabel } from "@/components/ui/form";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import ParentRelationShipField from "./parent-fields/parent-relationship-field";
import ParentPhoneField from "./parent-fields/parent-phone-field";
import ParentNameField from "./parent-fields/parent-name-field";

const ParentField = ({ form, student }: FieldProps) => {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "parents",
  });

  useEffect(() => {
    form.setValue(
      "parents",
      student?.parents as {
        name: string;
        relationship: parentRelation;
        phone: string;
      }[]
    );
  }, [student, form]);

  useEffect(() => {
    if (fields.length === 0) {
      append({
        name: "",
        relationship: parentRelation.Father,
        phone: "",
      });
    }
  }, [fields, append]);

  return (
    <div className="flex flex-col gap-6">
      {fields.map((value, index) => (
        <div key={value.id}>
          <div className="flex flex-col gap-2">
            <FormLabel
              className={form.formState.errors.parents ? "text-red-500" : ""}
            >
              Informacion del responsable
            </FormLabel>
            <ParentNameField form={form} index={index} />
            <ParentRelationShipField form={form} index={index} />
            <ParentPhoneField form={form} index={index} />
          </div>
          <div className="flex gap-2 pt-2">
            <Button type="button" onClick={() => remove(index)}>
              Remover responsable
            </Button>
            <Button
              type="button"
              onClick={() =>
                append({
                  name: "",
                  relationship: parentRelation.Father,
                  phone: "",
                })
              }
            >
              A&#241;adir responsable
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParentField;
