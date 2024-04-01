import { ObjectId } from "mongodb";

export type CellContextId<TData> = CellContext<TData, unknown> & {
  studentId?: string | ObjectId<TData>;
  teacherId?: string | ObjectId<TData>;
  userId?: string | ObjectId<TData>;
  academicUsersId?: string | ObjectId<TData>;
  teacherClassName?: string;
  editStudentGradeId?: string | ObjectId<TData>;
};

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchString?: string;
}

export interface TableProps<TData> {
  table: Table<TData>;
  columns?: ColumnDef<TData, TValue>[];
  userString?: string;
  data?: TData[];
  _id?: string;
  getMethod?: any;
  searchString?: string;
}
