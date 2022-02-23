import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CrudFormCreateInput = {
  role?: "Admin" | "Employee" | "Manager" | null;
  user?: UserWhereUniqueInput | null;
};
