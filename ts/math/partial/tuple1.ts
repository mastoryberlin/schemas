import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/math/tuple1.json",
  "allOf": [
    {
      "$ref": "./tuple.json"
    },
    {
      "properties": {
        "x": {
          "type": "number"
        }
      }
    }
  ]
} as const satisfies JSONSchema