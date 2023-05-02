import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeadTypeServiceBase } from "./base/leadType.service.base";

@Injectable()
export class LeadTypeService extends LeadTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
