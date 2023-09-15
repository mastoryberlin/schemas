import { FromSchema, JSONSchema } from "json-schema-to-ts";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "allOf": [
    {
      "properties": {
        "class": {
          "const": "ModelMesh"
        },
        "fileName": {
          "type": "string"
        },
        "id": {
          "type": "string"
        }
      }
    }
  ],
  "required": [
    "class",
    "fileName"
  ],
  "unevaluatedProperties": false
} as const satisfies JSONSchema

export type ModelMesh = FromSchema<typeof schema>