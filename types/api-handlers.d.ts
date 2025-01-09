import { ObjectId } from "mongodb";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ApiPut<SchemaData> = {
  params: ObjectId;
};

export interface ApiHandlersPostAndPut<SchemaData> {
  ageCalculation?: (values: SchemaData) => void;
  setResponseStatus: (status: boolean) => void;
  userString: string;
  values: SchemaData;
  _id?: string | ObjectId;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FetchData<SchemaData>
  extends Pick<ApiHandlersPostAndPut<SchemaData>, "_id" | "userString"> {}
