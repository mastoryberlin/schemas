import type { JSONSchema } from "json-schema-to-ts";
import identifier from "../identifier";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "toolsById": {
      /**
       * A list of fragment IDs representing specific tools 
       * which the user might select to attempt the interaction.
       */
      "type": "array",
      "items": {
        "$ref": "../identifier.json"
      } as unknown as typeof identifier,
      "examples": [
        "myTool1"
      ]
    },
    "toolClasses": {
      /**
       * A list of fragment class names representing tool types 
       * which the user might select to attempt the interaction.
       */
      "type": "array",
      "items": {
        "$ref": "../identifier.json"
      } as unknown as typeof identifier,
      "examples": [
        "AddTool",
        "SelectTool"
      ]
    }
  }
} as const satisfies JSONSchema