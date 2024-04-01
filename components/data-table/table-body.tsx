import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { CellContextId, TableProps } from "@/types/table-data";
import { Row, flexRender } from "@tanstack/react-table";

const DataTableBody = <TData extends unknown>({
  columns,
  table,
  data,
}: TableProps<TData>) => {
  if (!data) {
    return <caption>Loading...</caption>;
  }

  const academicUsersId = data.map((value) => {
    return (value as TableProps<TData>)._id;
  });

  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row: Row<TData>) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell: CellContextId<TData>) => {
              cell.getContext().academicUsersId =
                academicUsersId[row.index]?.toString();
              return (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns?.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default DataTableBody;
