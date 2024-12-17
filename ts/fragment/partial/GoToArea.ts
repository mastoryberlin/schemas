import type { JSONSchema } from "json-schema-to-ts";
import type identifier from "../../core/identifier";

export default {
  "properties": {
    "areaName": {
      /** 
       * The name of the area to which the user has to go
       * in order to finish this activity. */
      "$ref": "../../core/identifier.json"
    } as unknown as typeof identifier,
    "mustStayInside": {
      /**
       * Optionally, a timeout in seconds to wait after the user
       * has entered the area. If they leave the area before the
       * timeout, the activity will not finish.
       */
      "type": "number"
    },
    "resetOnLeave": {
      /**
       * Resets the activity automatically after it is done
       * whenever the user leaves the trigger area.
       */
      "type": "boolean"
    }
  },
  "required": []
} as const satisfies JSONSchema