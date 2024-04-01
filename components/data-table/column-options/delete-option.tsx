import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { CellContextId } from "@/types/table-data";

type DeleteFunction<T> = (data: T) => void;

const OptionsDeleteColumn = <T extends { _id: string }>({
  academicUsersId,
  deleteFunction,
  userString,
}: CellContextId<T> & { deleteFunction: DeleteFunction<T> }) => {
  const deleteOption = deleteFunction({
    _id: academicUsersId,
    userString: userString,
  });

  return (
    <button onClick={deleteOption} className="w-full">
      <DropdownMenuItem className="cursor-pointer text-red-500 ">
        Eliminar
      </DropdownMenuItem>
    </button>
  );
};

export default OptionsDeleteColumn;
