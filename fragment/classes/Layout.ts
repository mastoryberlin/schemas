import { FromSchema, JSONSchema } from "json-schema-to-ts";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "allOf": [
    {
      "properties": {
        "class": {
          "const": "Layout"
        },
        "layout": {
          "type": "string",
          "enum": [
            "grid",
            "stack",
            "equal-spacing"
          ]
        },
        "direction": {
          "type": "string",
          "enum": [
            "row",
            "column"
          ]
        },
        "gap": {
          "type": "number"
        }
      }
    }
  ],
  "unevaluatedProperties": false,
  "required": [
    "class"
  ]
} as const satisfies JSONSchema

export type Layout = FromSchema<typeof schema>