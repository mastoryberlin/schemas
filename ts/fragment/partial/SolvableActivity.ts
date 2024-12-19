import type { JSONSchema } from "json-schema-to-ts";

export default {
  "properties": {
    /**
     * If a numeric solution is required, defines the default tolerance for all numbers.
     */
    "numericalTolerance": {
      "type": "number",
      "minimum": 0
    },
    /**
     * Automatically "submits" and evaluates to a "correct solution" when
     * the specified conditions are fulfilled.
     */
    "autoSubmit": {
      "type": "boolean"
    }
  },
  "required": []
} as const satisfies JSONSchema