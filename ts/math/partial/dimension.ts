import type { JSONSchema } from "json-schema-to-ts"

export default {
  "$id": "https://mastory.io/schemas/math/partial/dimension.json",
  "type": "object",
  "properties": {
    "dimension": {
      "type": "number"
    }
  }
} as const satisfies JSONSchema