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
    data?: any;
  }
  interface User {
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
