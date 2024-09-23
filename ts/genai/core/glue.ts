import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "partials2schemaOut": {
      "type": "string"
    },
    "schemaOut2examples": {
      "type": "string"
    },
    "examplesIntro": {
      "type": "string"
    },
    "exampleHeader": {
      "type": "string"
    },
    "userInput": {
      "type": "string"
    },
    "yourResponse": {
      "type": "string"
    },
    "examples2input": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "partials2schemaOut",
    "schemaOut2examples",
    "examplesIntro",
    "exampleHeader",
    "userInput",
    "yourResponse",
    "examples2input"
  ]
} as const satisfies JSONSchema