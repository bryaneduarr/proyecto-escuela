import { TableProps } from "@/types/table-data";
import { Input } from "@/components/ui/input";

const DataTableSearchFilter = <TData extends unknown>({
  searchString,
  table,
}: TableProps<TData>) => {
  const tableFilter = "name";

  return (
    <div className="flex items-center py-4">
      <Input
        placeholder={`Buscar ${searchString}`}
        value={(table.getColumn(tableFilter)?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn(tableFilter)?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
    </div>
  );
};

export default DataTableSearchFilter;
