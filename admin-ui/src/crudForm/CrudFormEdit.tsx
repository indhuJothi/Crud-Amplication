import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const CrudFormEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="role"
          label="Role"
          choices={[
            { label: "Admin", value: "Admin" },
            { label: "Employee", value: "Employee" },
            { label: "Manager", value: "Manager" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
