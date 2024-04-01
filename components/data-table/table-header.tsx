import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Header, HeaderGroup, flexRender } from "@tanstack/react-table";
import { TableProps } from "@/types/table-data";

const DataTableHeader = <TData extends unknown>({
  table,
}: TableProps<TData>) => {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup: HeaderGroup<TData>) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header: Header<TData, unknown>) => {
            return (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};

export default DataTableHeader;
