import { ApiHandlersPostAndPut } from "@/types/api-handlers";

export const postApiHandler = async <T>({
  setResponseStatus,
  ageCalculation,
  userString,
  values,
}: ApiHandlersPostAndPut<T>) => {
  const newValues = ageCalculation ? ageCalculation!(values) : values;

  await fetch(`/api/${userString}s`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newValues),
  })
    .then((response) => {
      response.json();
      setResponseStatus(true);
    })
    .catch((error) => {
      console.error(error);
      setResponseStatus(false);
    });
};
