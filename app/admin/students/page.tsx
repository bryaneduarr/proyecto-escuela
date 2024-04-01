"use client";

import { DataTable } from "@/components/data-table/data-table";
import { columns } from "@/components/columns-table/columns-student";
import GetMethod from "@/lib/fetch-handlers/get-method";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const StudentsUsers = () => {
  const students = GetMethod("student");

  return (
    <div className="mt-6 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <Link href="/admin/students/create-student">
          <Button>Crear estudiante</Button>
        </Link>
      </div>
      <div>
        <DataTable
          columns={columns}
          data={students}
          searchString="estudiante"
        />
      </div>
    </div>
  );
};

export default StudentsUsers;
