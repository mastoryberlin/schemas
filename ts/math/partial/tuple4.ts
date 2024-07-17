import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/math/tuple4.json",
  "allOf": [
    {
      "$ref": "./tuple3.json"
    },
    {
      "properties": {
        "w": {
          "type": "number"
        }
      }
    }
  ]
} as const satisfies JSONSchema