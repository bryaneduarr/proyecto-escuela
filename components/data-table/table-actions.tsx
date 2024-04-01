import { TableProps } from "@/types/table-data";
import { Button } from "@/components/ui/button";

const DataTableActions = <TData extends unknown>({
  table,
}: TableProps<TData>) => {
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Anterior
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Siguiente
      </Button>
    </>
  );
};

export default DataTableActions;
