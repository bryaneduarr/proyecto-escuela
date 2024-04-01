import { Option } from "./global-users";

export interface Teacher {
  _id?: ObjectId;
  name: string;
  idNumber: string;
  assignedGrade: string;
  assignClass: Option[];
}
