import { StudentGrades } from "@/types/students";
import { ObjectId } from "mongodb";
import { User } from "next-auth";

export interface UserLogin extends User {
  id?: string | ObjectId;
  user: string;
  password: string;
  role?: string;
}

declare module "next-auth" {
  interface Session {
    role?: string | unknown;
  }
  interface AdapterUser {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
  }
  interface User {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any;
  }
}

export interface UserTeacher {
  assignedGrade?: string;
  assignedClassesToTeacher?: string[];
  studentsOnGrade?: {
    name?: string;
    _id?: string | ObjectId;
    studentGrades: StudentGrades;
  }[];
}

export type UserStudentTeacher = UserTeacher["studentsOnGrade"][number];
