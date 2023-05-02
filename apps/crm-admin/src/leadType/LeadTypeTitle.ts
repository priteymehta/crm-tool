import { LeadType as TLeadType } from "../api/leadType/LeadType";

export const LEADTYPE_TITLE_FIELD = "title";

export const LeadTypeTitle = (record: TLeadType): string => {
  return record.title || String(record.id);
};
