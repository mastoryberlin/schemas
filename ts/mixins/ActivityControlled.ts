import type { JSONSchema } from "json-schema-to-ts";
import type identifier from "../core/identifier";

export default {
  "$id": "https://mastory.io/schemas/mixins/ActivityControlled.json",
  "properties": {
    "controllingActivity": {
      /**
       * The ID of an activity fragment which is consulted to define this
       * fragment's support, instructions, and submit behavior.
       */
      "$ref": "../core/identifier.json"
    } as unknown as typeof identifier
  }
} as const satisfies JSONSchema