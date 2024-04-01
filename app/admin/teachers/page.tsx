"use client";

import { DataTable } from "@/components/data-table/data-table";
import { columns } from "@/components/columns-table/columns-teacher";
import { Button } from "@/components/ui/button";
import GetMethod from "@/lib/fetch-handlers/get-method";
import Link from "next/link";

const TeachersUsers = () => {
  const teachers = GetMethod("teacher");

  return (
    <div>
      <div className="flex justify-between items-center mt-6">
        <Link href="/admin/teachers/create-teacher">
          <Button>Crear un maestro</Button>
        </Link>
      </div>
      <div>
        <DataTable columns={columns} data={teachers} searchString="maestro" />
      </div>
    </div>
  );
};

export default TeachersUsers;
