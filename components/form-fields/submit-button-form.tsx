import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SubmitFormButton = ({
  responseStatus,
  messageStatus,
  useString,
}: {
  responseStatus?: boolean | undefined;
  messageStatus: string;
  useString: string;
}) => {
  return (
    <div>
      <Button type="submit">Guardar cambios</Button>
      {responseStatus != undefined ? (
        <span className={responseStatus ? "text-green-500" : "text-red-500"}>
          {responseStatus
            ? `Exito, ${useString} ${messageStatus}!`
            : "Something went wrong try again."}
        </span>
      ) : null}
    </div>
  );
};

export default SubmitFormButton;
