import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ArrowUpDown, ExternalLink, MoreHorizontal } from "lucide-react";
import { CellContextId } from "@/types/table-data";
import { UserLogin } from "@/types/users";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const columns: ColumnDef<UserLogin>[] = [
  {
    id: "actions",
    cell: (cell: CellContextId<UserLogin>) => {
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
            <Link
              href={`/admin/users/edit-user/${academicUsersId}`}
              className="flex items-center"
            >
              <DropdownMenuItem className="cursor-pointer">
                Editar usuario
                <ExternalLink className="ml-2 h-3.5 w-4" />
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "_id",
    header: "Id",
  },
  {
    id: "name",
    accessorKey: "user",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Usuario
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];
