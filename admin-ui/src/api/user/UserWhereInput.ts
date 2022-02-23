import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type UserWhereInput = {
  country?: "India" | "America" | "Australia" | "Germany";
  email?: StringFilter;
  firstName?: StringFilter;
  gender?: "Male" | "Female" | "Transgender";
  id?: StringFilter;
  lastName?: StringNullableFilter;
  mobile?: IntFilter;
  username?: StringFilter;
};
