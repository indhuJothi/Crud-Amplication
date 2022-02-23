import { CrudForm } from "../crudForm/CrudForm";

export type User = {
  country?: "India" | "America" | "Australia" | "Germany";
  createdAt: Date;
  crudForms?: Array<CrudForm>;
  email: string;
  firstName: string;
  gender?: "Male" | "Female" | "Transgender" | null;
  id: string;
  lastName: string | null;
  mobile: number;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
