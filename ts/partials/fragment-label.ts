import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/partials/fragment-label.json",
  "oneOf": [
    {
      "type": "string"
    },
    {
      "allOf": [
        {
          "description": "A label displayed next to the fragment."
        },
        {
          "$ref": "./label.json"
        },
        {
          "properties": {
            "position": {
              "$ref": "./label-position.json"
            }
          }
        }
      ]
    }
  ]
} as const satisfies JSONSchema