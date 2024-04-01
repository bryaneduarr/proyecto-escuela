/**Esta archivo se utiliza para una configuracion necesaria para las clases a la hora de estilizar y dar funciones a elementos "cn()" */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
