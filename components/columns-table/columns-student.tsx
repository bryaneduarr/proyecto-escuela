import { CellContextId } from "@/types/table-data";
import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Student } from "@/types/students";
import { Button } from "@/components/ui/button";
import MenuOptions from "@/components/data-table/column-options/menu-options";

export const columns: ColumnDef<Student>[] = [
  {
    id: "actions",
    cell: (cell: CellContextId<Student>) => {
      const academicUsersId = cell.academicUsersId;
      return (
        <MenuOptions academicUsersId={academicUsersId} userString="student" />
      );
    },
  },
  {
    accessorKey: "_id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "age",
    header: "Edad",
    accessorFn: (item: Student) => [item.age.dateOfBirth, item.age.age],
  },
  {
    accessorKey: "grade",
    header: "Grado",
  },
  {
    accessorKey: "gender",
    header: "Genero",
  },
  {
    accessorKey: "address",
    header: "Direccion",
    accessorFn: (item: Student) => [
      item.address.city,
      item.address.state,
      item.address.street,
      item.address.zipcode,
    ],
  },
  {
    accessorKey: "parents",
    header: "Padres",
    accessorFn: (item: Student) =>
      item.parents.map((parent) => [
        parent.name,
        parent.relationship,
        parent.phone,
      ]),
  },
];
