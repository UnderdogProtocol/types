import PEG from "pegjs";
import { z } from "zod";

const grammar = `
  query
    = andQuery / orQuery / comparison

  andQuery
    = head:comparison " AND " tail:query { return { operator: "$and", children: [head, tail] }; }

  orQuery
    = head:comparison " OR " tail:query { return { operator: "$or", children: [head, tail] }; }

  Field
    = chars:$(Char ("." Char)?)+
      { return chars; }

  Char
    = [a-zA-Z0-9]

  Value
    = QuotedValue / UnquotedValue

  QuotedValue
    = '"' chars:[^"]* '"' { return chars.join(''); }

  UnquotedValue
    = chars:[^ ]+ { return isNaN(chars.join('')) ? chars.join('') : Number(chars.join('')); }

  comparison
    = field:Field op:(":" / "<" / ">" / "~") value:Value { return { field: field, operator: op, value: value }; }
`;

export const parser = PEG.generate(grammar);

export type ComparisonOperator = ":" | "<" | ">" | "~";

export interface Comparison {
  field: string;
  operator: ComparisonOperator;
  value: string | number;
}

export interface LogicalQuery {
  operator: "$and" | "$or";
  children: SearchQuery[];
}

export type SearchQuery = Comparison | LogicalQuery;

export const searchQuerySchema = z.string().transform<SearchQuery>((data) => {
  return parser.parse(data);
});
