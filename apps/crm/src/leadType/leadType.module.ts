import { Module } from "@nestjs/common";
import { LeadTypeModuleBase } from "./base/leadType.module.base";
import { LeadTypeService } from "./leadType.service";
import { LeadTypeController } from "./leadType.controller";
import { LeadTypeResolver } from "./leadType.resolver";

@Module({
  imports: [LeadTypeModuleBase],
  controllers: [LeadTypeController],
  providers: [LeadTypeService, LeadTypeResolver],
  exports: [LeadTypeService],
})
export class LeadTypeModule {}
