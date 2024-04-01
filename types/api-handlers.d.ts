import { ObjectId } from "mongodb";

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

export interface FetchData<SchemaData>
  extends Pick<ApiHandlersPostAndPut<SchemaData>, "_id" | "userString"> {}
