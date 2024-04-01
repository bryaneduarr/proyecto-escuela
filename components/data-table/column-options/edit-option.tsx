import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { CellContextId } from "@/types/table-data";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const OptionsEditColumn = <T extends Object>({
  academicUsersId,
  userString,
}: CellContextId<T> & { userString: string }) => {
  const id = academicUsersId;

  return (
    <Link
      href={`/admin/${userString}s/edit-${userString}/${id}`}
      className="flex items-center"
    >
      <DropdownMenuItem className="cursor-pointer">
        {`Editar ${userString}`}
        <ExternalLink className="ml-2 h-3.5 w-4" />
      </DropdownMenuItem>
    </Link>
  );
};

export default OptionsEditColumn;
