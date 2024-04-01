import { TableProps } from "@/types/table-data";
import DataTableSearchFilter from "./filters/table-search-filter";
import DataTableColumnFilter from "./filters/table-column-filter";

const DataTableFilters = <TData extends unknown>({
  searchString,
  table,
}: TableProps<TData>) => {
  return (
    <div className="flex justify-between">
      <DataTableSearchFilter table={table} searchString={searchString} />
      <DataTableColumnFilter table={table} />
    </div>
  );
};

export default DataTableFilters;
