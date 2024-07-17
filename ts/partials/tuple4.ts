import type { JSONSchema } from "json-schema-to-ts";
import Tuple from './tuple'

export default {
  "$id": "https://mastory.io/schemas/partials/tuple4.json",
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
        },
        "z": {
          "type": "number"
        },
        "w": {
          "type": "number"
        }
      }
    }
  ],
  "unevaluatedProperties": false
} as const satisfies JSONSchema