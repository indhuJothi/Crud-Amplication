import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  NumberInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="country"
          label="Country"
          choices={[
            { label: "India", value: "India" },
            { label: "America", value: "America" },
            { label: "Australia", value: "Australia" },
            { label: "Germany", value: "Germany" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <SelectInput
          source="gender"
          label="Gender"
          choices={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
            { label: "Transgender", value: "Transgender" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Last Name" source="lastName" />
        <NumberInput step={1} label="Mobile" source="mobile" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
