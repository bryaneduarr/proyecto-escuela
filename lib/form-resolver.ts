/** Este archivo es utilizado en todos lados donde haya un formulario, gracias a "react-hook-form" se puede hacer asi
 *  diciendole que esquema y que Tipos puede utilizar.
 */

import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";

export function FormResolver<T extends FieldValues>(schema: ZodSchema<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
  });
  return form;
}
