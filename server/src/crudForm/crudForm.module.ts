import { Module } from "@nestjs/common";
import { CrudFormModuleBase } from "./base/crudForm.module.base";
import { CrudFormService } from "./crudForm.service";
import { CrudFormController } from "./crudForm.controller";
import { CrudFormResolver } from "./crudForm.resolver";

@Module({
  imports: [CrudFormModuleBase],
  controllers: [CrudFormController],
  providers: [CrudFormService, CrudFormResolver],
  exports: [CrudFormService],
})
export class CrudFormModule {}
