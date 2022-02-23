import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CrudFormWhereInput = {
  id?: StringFilter;
  role?: "Admin" | "Employee" | "Manager";
  user?: UserWhereUniqueInput;
};
