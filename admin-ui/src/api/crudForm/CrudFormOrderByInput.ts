import { SortOrder } from "../../util/SortOrder";

export type CrudFormOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
