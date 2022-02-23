export type UserCreateInput = {
  country: "India" | "America" | "Australia" | "Germany";
  email: string;
  firstName: string;
  gender?: "Male" | "Female" | "Transgender" | null;
  lastName?: string | null;
  mobile: number;
  password: string;
  roles: Array<string>;
  username: string;
};
