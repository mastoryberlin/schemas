import type { JSONSchema } from "json-schema-to-ts";
import type onlyExcept from "./only-except";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "use": {
      /**
       * Whether users can use this fragment.
       * 
       * Users selecting "Use" will trigger behavior as
       * defined for this specific fragment or its class.
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