import { CrudForm as TCrudForm } from "../api/crudForm/CrudForm";

export const CRUDFORM_TITLE_FIELD = "id";

export const CrudFormTitle = (record: TCrudForm): string => {
  return record.id || record.id;
};
