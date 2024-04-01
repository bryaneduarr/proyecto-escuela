import { StudentGrades } from "@/types/students";
import { ObjectId } from "mongodb";

export interface FieldProps {
  form: UseFormReturn<UserSchema>;
  index?: number;
  student?: Student | null;
  teacher?: Teacher | null;
  gradeValueProp?: (value: string) => void;
  storedGrade?: string;
  gradeValue?: string;
  currentTeacher?: string | ObjectId;
  userNameCredential?: (value: string) => void;
  studentGrades?: StudentGrades;
}

export interface Option {
  value: string;
  label: string;
  disable?: boolean;
  fixed?: boolean;
  [key: string]: string | boolean | undefined;
}
