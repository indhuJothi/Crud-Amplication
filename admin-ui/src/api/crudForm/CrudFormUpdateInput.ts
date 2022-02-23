import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CrudFormUpdateInput = {
  role?: "Admin" | "Employee" | "Manager" | null;
  user?: UserWhereUniqueInput | null;
};
