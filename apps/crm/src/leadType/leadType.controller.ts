import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeadTypeService } from "./leadType.service";
import { LeadTypeControllerBase } from "./base/leadType.controller.base";

@swagger.ApiTags("leadTypes")
@common.Controller("leadTypes")
export class LeadTypeController extends LeadTypeControllerBase {
  constructor(protected readonly service: LeadTypeService) {
    super(service);
  }
}
