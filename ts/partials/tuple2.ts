import type { JSONSchema } from "json-schema-to-ts";
import Tuple from './tuple'

export default {
  "properties": {
    "y": {
      "type": "number"
    }
  }
} as const satisfies JSONSchema