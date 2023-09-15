import { FromSchema, JSONSchema } from "json-schema-to-ts";

const schema = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "type": "object",
    "allOf": [
      {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "properties": {
    "id": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string",
  "minLength": 1,
  "pattern": "^[a-zA-Z_][a-zA-Z_0-9]*$"
},
    "model": {
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "string",
  "minLength": 1,
  "pattern": "^[a-zA-Z_][a-zA-Z_0-9]*$"
},
    "onlyInStates": {
      "title": "A string array of state names of the nearest parent state machine. If non-empty, limits this fragment's lifetime to when one of those states is active.",
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "default": []
    }
  }
},
      {
        "properties": {
          "class": {
            "const": "Label"
          },
          "text": {
            "type": "string"
          },
          "labelPosition": {
            "type": "string",
            "enum": [
              "left",
              "right",
              "top",
              "bottom"
            ]
          },
          "bold": {
            "type": "boolean"
          },
          "fontSize": {
            "type": "string"
          },
          "whiteSpace": {
            "type": "string",
            "enum": [
              "normal",
              "nowrap",
              "pre",
              "pre-wrap",
              "pre-line"
            ]
          }
        }
      }
    ],
    "required": [
        "class",
        "text"
    ],
    "unevaluatedProperties": false
  } as const satisfies JSONSchema

export type Label = FromSchema<typeof schema>