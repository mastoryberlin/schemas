import type { JSONSchema } from "json-schema-to-ts";
import identifier from "../identifier";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "isTruthy": {
      /**
       * A list of unit variables
       * which must all be truthy to fulfill the condition.
       */
      "type": "array",
      "items": {
        "$ref": "../identifier.json"
      } as unknown as typeof identifier,
      "examples": [
        "myVar1", "anotherVar"
      ]
    }
  }
} as const satisfies JSONSchema