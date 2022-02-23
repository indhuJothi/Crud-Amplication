import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CrudFormServiceBase } from "./base/crudForm.service.base";

@Injectable()
export class CrudFormService extends CrudFormServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
