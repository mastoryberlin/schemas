import { FromSchema, JSONSchema } from "json-schema-to-ts";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema",
  "oneOf": [
    {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string",
  "pattern": "^(number|string|boolean|object|Formula|Cuboids?|('[^']*'\\s*\\|\\s*)*'[^']*')(\\[\\])*$"
},
    {
      "type": "object",
      "properties": {
        "type": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string",
  "pattern": "^(number|string|boolean|object|Formula|Cuboids?|('[^']*'\\s*\\|\\s*)*'[^']*')(\\[\\])*$"
},
        "value": {
          "default": null
        },
        "comment": {
          "type": "string",
          "pattern": "^[A-Z].*\\.$"
        }
      },
      "required": [
        "type"
      ],
      "unevaluatedProperties": false
    }
  ]
} as const satisfies JSONSchema

export type DataField = FromSchema<typeof schema>