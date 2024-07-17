import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/partials/tuple2.json",
  "allOf": [
    {
      "$ref": "./tuple1.json"
    },
    {
      "properties": {
        "y": {
          "type": "number"
        }
      }
    }
  ]
} as const satisfies JSONSchema