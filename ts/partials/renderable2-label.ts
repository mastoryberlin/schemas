import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/renderable2-label.json",
  "allOf": [
    {
      "$ref": "./label.json"
    },
    {
      "type": "object",
      "properties": {
        "mode": {
          "type": "string",
          "enum": [
            "value",
            "name",
            "custom"
          ]
        }
      }
    }
  ]
} as const satisfies JSONSchema