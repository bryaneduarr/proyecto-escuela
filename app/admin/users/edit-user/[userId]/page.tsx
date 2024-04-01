"use client";

import { UserCredentials, userCredentialsSchema } from "@/lib/models/user";
import { useEffect, useState } from "react";
import { CellContextId } from "@/types/table-data";
import { FormResolver } from "@/lib/form-resolver";
import { UserLogin } from "@/types/users";
import UsersPutApiOnSubmit from "@/lib/users/users-put-api-on-submit";
import GetMethodById from "@/lib/fetch-handlers/get-method-by-id";
import UsersForm from "@/components/form-fields/users/users-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const EditUserFromId = ({ params }: CellContextId<UserLogin>) => {
  const [responseStatus, setResponseStatus] = useState<boolean>();
  const [user, setUser] = useState<UserLogin | null>(null);

  const form = FormResolver<UserCredentials>(userCredentialsSchema);

  useEffect(() => {
    GetMethodById(params.userId, "user").then((user) => setUser(user));
  }, [params.userId]);

  const onSubmit = async (values: UserLogin) => {
    UsersPutApiOnSubmit({ setResponseStatus, values, params, user });
  };

  return (
    <div>
      <div className="mt-4 mb-6">
        <Link href="/admin/users">
          <Button>Regresar</Button>
        </Link>
      </div>
      <UsersForm
        responseStatus={responseStatus}
        onSubmit={onSubmit}
        form={form}
        user={user}
      />
    </div>
  );
};

export default EditUserFromId;
