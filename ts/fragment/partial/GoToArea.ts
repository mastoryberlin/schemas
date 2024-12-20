import type { JSONSchema } from "json-schema-to-ts";

export default {
  "properties": {
    "areaNames": {
      /** 
       * The name(s) of the area(s) to which the user has to go
       * in order to finish this activity. */
      "oneOf": [
        {
          "type": "string"
        },
        {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      ]
    },
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