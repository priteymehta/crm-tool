import { LeadTypeWhereInput } from "./LeadTypeWhereInput";
import { LeadTypeOrderByInput } from "./LeadTypeOrderByInput";

export type LeadTypeFindManyArgs = {
  where?: LeadTypeWhereInput;
  orderBy?: Array<LeadTypeOrderByInput>;
  skip?: number;
  take?: number;
};
