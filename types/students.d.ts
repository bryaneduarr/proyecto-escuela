import { defaultStudentGrades } from "@/lib/models/students";
import { ObjectId } from "mongodb";
import { Teacher } from "./teachers";

interface Address {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

interface Age {
  dateOfBirth: string;
  age: number | null;
}

interface Parent {
  name: string;
  relationship: string;
  phone: string;
}

export interface GradeValues {
  partial1: string;
  partial2: string;
  partial3: string;
  partial4: string;
}

export interface StudentGrades {
  Matematicas: GradeValues;
  Musica: GradeValues;
  Arte: GradeValues;
  Tecnologia: GradeValues;
  Religion: GradeValues;
  CienciasNaturales: GradeValues;
  LenguajeYLiteratura: GradeValues;
  HistoriaYGeografia: GradeValues;
  EducacionFisica: GradeValues;
  IdiomaExtranjero: GradeValues;
  EducacionCivica: GradeValues;
  EducacionAmbiental: GradeValues;
}

type GradePartialKeys = "partial1" | "partial2" | "partial3" | "partial4";

type ClassSubjectKeys = keyof typeof defaultStudentGrades;

export type FormFieldClassSubjectNames = {
  [K in ClassSubjectKeys]: {
    [P in GradePartialKeys]: `studentGrades.${K}.${P}`;
  };
}[ClassSubjectKeys][GradePartialKeys];

export interface Student {
  _id?: ObjectId;
  name: string;
  gender: string;
  age: Age;
  grade: string;
  address: Address;
  parents: Parent[];
  studentGrades: StudentGrades;
}
