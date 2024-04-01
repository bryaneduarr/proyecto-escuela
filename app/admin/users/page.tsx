"use client";

import { DataTable } from "@/components/data-table/data-table";
import { columns } from "@/components/columns-table/columns-user";
import GetMethod from "@/lib/fetch-handlers/get-method";

const UsersPage = () => {
  const users = GetMethod("user");

  return (
    <div className="mt-6">
      <DataTable columns={columns} data={users} searchString="usuario" />
    </div>
  );
};

export default UsersPage;
