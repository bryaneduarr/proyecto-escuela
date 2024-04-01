import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const LoginButton = ({
  spinnerStatus,
  error,
}: {
  spinnerStatus: boolean;
  error: string;
}) => {
  return (
    <div className="flex justify-between">
      <Button disabled={spinnerStatus}>Login</Button>
      {spinnerStatus
        ? spinnerStatus && <Spinner show={spinnerStatus} />
        : error && (
            <Alert
              variant="destructive"
              className=" py-0 px-1 flex items-center w-auto"
            >
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
    </div>
  );
};

export default LoginButton;
