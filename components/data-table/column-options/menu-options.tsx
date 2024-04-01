import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteApiHanlder } from "@/lib/api-handlers/delete-handler";
import { MoreHorizontal } from "lucide-react";
import { CellContextId } from "@/types/table-data";
import { Button } from "@/components/ui/button";
import OptionsDeleteColumn from "@/components/data-table/column-options/delete-option";
import OptionsEditColumn from "@/components/data-table/column-options/edit-option";

const MenuOptions = <T extends Object>({
  academicUsersId,
  userString,
}: CellContextId<T>) => {
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
        <OptionsEditColumn
          academicUsersId={academicUsersId}
          userString={userString}
        />
        <OptionsDeleteColumn
          academicUsersId={academicUsersId}
          deleteFunction={DeleteApiHanlder}
          userString={userString}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuOptions;
