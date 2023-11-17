import { FromSchema, JSONSchema } from "json-schema-to-ts";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "title": "This fragment should be the top-level fragment for any unit.",
  "properties": {
    "class": {
      "const": "UnitRoot"
    }
  },
  "required": [
    "class"
  ],
  "unevaluatedProperties": false
} as const satisfies JSONSchema

export type UnitRoot = FromSchema<typeof schema>