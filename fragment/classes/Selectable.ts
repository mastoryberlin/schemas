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
  "$schema": "http://json-schema.org/draft-07/schema",
  "type": "object",
  "properties": {
    "initiallySelected": {
      "type": "boolean",
      "default": false
    }
  }
},
    {
      "properties": {
        "class": {
          "const": "Selectable"
        }
      }
    }
  ],
  "unevaluatedProperties": false,
  "required": [
    "class"
  ]
} as const satisfies JSONSchema

export type Selectable = FromSchema<typeof schema>