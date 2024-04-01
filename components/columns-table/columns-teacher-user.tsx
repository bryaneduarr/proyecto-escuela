import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ExternalLink, MoreHorizontal } from "lucide-react";
import { UserStudentTeacher } from "@/types/users";
import { CellContextId } from "@/types/table-data";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const columns = (
  subject: string,
  decodedclassSubject: string
): ColumnDef<UserStudentTeacher>[] => [
  {
    id: "actions",
    cell: (cell: CellContextId<UserStudentTeacher>) => {
      const academicUsersId = cell.academicUsersId;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Opciones</DropdownMenuLabel>
            <DropdownMenuItem className="cursor-pointer">
              <Link
                href={`/teacher/edit-student-grade/${academicUsersId}?classSubject=${decodedclassSubject}`}
                className="flex items-center"
              >
                Editar notas del estudiante
                <ExternalLink className="ml-2 h-3.5 w-4" />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    header: "Id",
    accessorFn: (student) => student._id,
  },
  {
    id: "name",
    accessorKey: "studentsOnGrade",
    header: "Estudiante",
    accessorFn: (student) => student.name,
  },
  ...Array.from({ length: 4 }, (_, index) => ({
    id: `grade${index + 1}`,
    header: `Parcial ${index + 1}`,
    accessorFn: (student: UserStudentTeacher) =>
      student.studentGrades?.[subject]?.[`partial${index + 1}`],
  })),
];
