import type { JsonSchema } from "@jsonforms/core"

export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://mastory.io/schema/logic/unary.json",
  "title": "Logical Unary Operator",
  "type": "string",
  "enum": [
    "not"
  ]
} as const satisfies JsonSchema