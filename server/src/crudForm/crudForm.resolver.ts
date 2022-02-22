import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CrudFormResolverBase } from "./base/crudForm.resolver.base";
import { CrudForm } from "./base/CrudForm";
import { CrudFormService } from "./crudForm.service";

@graphql.Resolver(() => CrudForm)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CrudFormResolver extends CrudFormResolverBase {
  constructor(
    protected readonly service: CrudFormService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
