import { FromSchema, JSONSchema } from "json-schema-to-ts";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "allOf": [
    {
      "properties": {
        "class": {
          "const": "ShaderMaterial"
        },
        "fileName": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "uniforms": {
            "type": "object"
        },
        "defines": {
            "type": "object"
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

export type ShaderMaterial = FromSchema<typeof schema>