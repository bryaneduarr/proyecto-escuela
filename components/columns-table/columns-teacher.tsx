import { CellContextId } from "@/types/table-data";
import { ArrowUpDown } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import { Teacher } from "@/types/teachers";
import { Button } from "@/components/ui/button";
import MenuOptions from "@/components/data-table/column-options/menu-options";

export const columns: ColumnDef<Teacher>[] = [
  {
    id: "actions",
    cell: (cell: CellContextId<Teacher>) => {
      const academicUsersId = cell.academicUsersId;
      return (
        <MenuOptions academicUsersId={academicUsersId} userString="teacher" />
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
    accessorKey: "idNumber",
    header: "Numero de Identidad",
  },
  {
    accessorKey: "assignedGrade",
    header: "Grado asignado",
  },
  {
    accessorKey: "assignClass",
    header: "Clases asignadas",
    accessorFn: (item: Teacher) =>
      item.assignClass.map((classes) => [classes.label]),
  },
];
