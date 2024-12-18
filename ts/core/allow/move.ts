import type { JSONSchema } from "json-schema-to-ts";
import type onlyExcept from "./only-except";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "move": {
      /**
       * Whether users can move this fragment.
       * 
       * For DOM and canvas fragments, this typically involves dragging them
       * to a new screen or canvas position. For 3D fragments, defines if the user
       * may grab the object and place it somewhere else.
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