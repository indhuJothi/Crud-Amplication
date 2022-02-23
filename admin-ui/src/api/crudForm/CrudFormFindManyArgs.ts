import { CrudFormWhereInput } from "./CrudFormWhereInput";
import { CrudFormOrderByInput } from "./CrudFormOrderByInput";

export type CrudFormFindManyArgs = {
  where?: CrudFormWhereInput;
  orderBy?: CrudFormOrderByInput;
  skip?: number;
  take?: number;
};
