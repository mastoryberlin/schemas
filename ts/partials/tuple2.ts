import type { JSONSchema } from "json-schema-to-ts";
import Tuple from './tuple'

export default {
  "$id": "https://mastory.io/schemas/partials/tuple2.json",
  "type": "object",
  "allOf": [
    {
      "$ref": "./tuple.json"
    } as unknown as typeof Tuple,
    {
      "properties": {
        "x": {
          "type": "number"
        },
        "y": {
          "type": "number"
        }
      }
    }
  ],
  "unevaluatedProperties": true
} as const satisfies JSONSchema