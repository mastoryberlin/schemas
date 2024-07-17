import type { JSONSchema } from "json-schema-to-ts";
import Dimension from './dimension'

export default {
  "$id": "https://mastory.io/schemas/partials/tuple.json",
  "type": "object",
  "allOf": [
    {
      "$ref": "./dimension.json"
    } as unknown as typeof Dimension,
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
  ],
  "unevaluatedProperties": false
} as const satisfies JSONSchema