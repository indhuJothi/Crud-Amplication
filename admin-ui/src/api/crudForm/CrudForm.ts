import { User } from "../user/User";

export type CrudForm = {
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};