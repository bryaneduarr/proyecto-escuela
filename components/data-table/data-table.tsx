import { DataTableProps } from "@/types/table-data";
import { Table } from "@/components/ui/table";
import DataTableFilters from "@/components/data-table/table-filters";
import DataTableActions from "@/components/data-table/table-actions";
import DataTableConfig from "./data-table-config";
import DataTableHeader from "@/components/data-table/table-header";
import DataTableBody from "@/components/data-table/table-body";

export function DataTable<TData, TValue>({
  searchString,
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = DataTableConfig({ data, columns });

  return (
    <div>
      <DataTableFilters table={table} searchString={searchString} />
      <div className="rounded-md border">
        <Table className="h-7">
          <DataTableHeader table={table} />
          <DataTableBody table={table} columns={columns} data={data} />
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4">
          <DataTableActions table={table} />
        </div>
      </div>
    </div>
  );
}
