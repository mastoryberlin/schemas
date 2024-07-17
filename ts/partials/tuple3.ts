import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/partials/tuple3.json",
  "allOf": [
    {
      "$ref": "./tuple2.json"
    },
    {
      "properties": {
        "z": {
          "type": "number"
        }
      }
    }
  ]
} as const satisfies JSONSchema