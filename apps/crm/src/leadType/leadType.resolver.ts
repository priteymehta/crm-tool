import * as graphql from "@nestjs/graphql";
import { LeadTypeResolverBase } from "./base/leadType.resolver.base";
import { LeadType } from "./base/LeadType";
import { LeadTypeService } from "./leadType.service";

@graphql.Resolver(() => LeadType)
export class LeadTypeResolver extends LeadTypeResolverBase {
  constructor(protected readonly service: LeadTypeService) {
    super(service);
  }
}
