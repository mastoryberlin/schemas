import type { JsonSchema } from "@jsonforms/core"

export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://mastory.io/schema/logic/binary.json",
  "title": "Logical Binary Operator",
  "type": "string",
  "enum": [
    "and",
    "or"
  ]
} as const satisfies JsonSchema