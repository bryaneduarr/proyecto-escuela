"use client";

import { UserCredentials, userCredentialsSchema } from "@/lib/models/user";
import { FormResolver } from "@/lib/form-resolver";
import { useSession } from "next-auth/react";
import { UserLogin } from "@/types/users";
import { useRouter } from "next/navigation";
import { useState } from "react";

import LoginRedirectHandler from "@/lib/login/login-redirect-handler";
import LoginCardContainer from "./login-card-container";

const LoginComponent = () => {
  const [spinnerStatus, setSpinnerStatus] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const form = FormResolver<UserCredentials>(userCredentialsSchema);

  const { data: session } = useSession();

  const router = useRouter();

  const onSubmit = async (values: UserLogin) => {
    LoginRedirectHandler({
      setSpinnerStatus,
      setError,
      session,
      values,
      router,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <LoginCardContainer
        spinnerStatus={spinnerStatus}
        onSubmit={onSubmit}
        form={form}
        error={error}
      />
    </div>
  );
};

export default LoginComponent;
