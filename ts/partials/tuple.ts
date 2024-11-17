import type { JSONSchema } from "json-schema-to-ts";
import Dimension from './dimension'

export default {
  "properties": {
    "components": {
      "type": "array",
      "items": {
        "type": "number"
      }
    }
  }
} as const satisfies JSONSchema