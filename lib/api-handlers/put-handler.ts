import { ApiHandlersPostAndPut } from "@/types/api-handlers";

export const putApiHandler = async <T>({
  setResponseStatus,
  ageCalculation,
  userString,
  values,
  _id,
}: ApiHandlersPostAndPut<T>) => {
  const newValues = ageCalculation ? ageCalculation(values) : values;

  await fetch(`/api/${userString}s/${_id}`, {
    method: "PUT",
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
