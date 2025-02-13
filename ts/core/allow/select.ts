import type { JSONSchema } from "json-schema-to-ts";
import type onlyExcept from "./only-except";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "select": {
      /**
       * Whether users can select this object.
       */
      "oneOf": [
        {
          "type": "boolean"
        },
        {
          "$ref": "./only-except.json"
        } as unknown as typeof onlyExcept
      ],
      "default": true
    }
  }
} as const satisfies JSONSchema