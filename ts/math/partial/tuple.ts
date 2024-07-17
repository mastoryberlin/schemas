import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/math/tuple.json",
  "allOf": [
    {
      "$ref": "./dimension.json"
    },
    {
      "properties": {
        "components": {
          "type": "array",
          "items": {
            "type": "number"
          }
        }
      }
    }
  ]
} as const satisfies JSONSchema