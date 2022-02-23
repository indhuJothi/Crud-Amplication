import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CrudFormService } from "./crudForm.service";
import { CrudFormControllerBase } from "./base/crudForm.controller.base";

@swagger.ApiTags("crud-forms")
@common.Controller("crud-forms")
export class CrudFormController extends CrudFormControllerBase {
  constructor(
    protected readonly service: CrudFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
