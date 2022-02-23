import { User } from "../user/User";

export type CrudForm = {
  createdAt: Date;
  id: string;
  role?: "Admin" | "Employee" | "Manager" | null;
  updatedAt: Date;
  user?: User | null;
};
