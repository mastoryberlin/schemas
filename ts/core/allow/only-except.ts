import type { JSONSchema } from "json-schema-to-ts";
import type _with from "./with";
import type when from "./when";

export default {
  "type": "object",
  "properties": {
    "onlyWhen": {
      /**
       * Lists conditions which must be fulfilled
       * in order to perform the interaction.
       */
      "$ref": "./when.json"
    } as unknown as typeof when,
    "exceptWhen": {
      /**
       * Lists conditions which, if fulfilled,
       * disallow the interaction.
       */
      "$ref": "./when.json"
    } as unknown as typeof when,
    "onlyWith": {
      /**
       * Lists tools or tool types which the user must select 
       * in order to perform the interaction.
       */
      "$ref": "./with.json"
    } as unknown as typeof _with,
    "exceptWith": {
      /**
       * Lists tools or tool types which, if selected, 
       * disallow the interaction.
       */
      "$ref": "./with.json"
    } as unknown as typeof _with
  }
} as const satisfies JSONSchema