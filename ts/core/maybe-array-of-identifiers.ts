import type { FromSchema, JSONSchema } from "json-schema-to-ts";
import type identifier from "./identifier";
export default {
  "oneOf": [
    {
      "$ref": "./identifier.json"
    } as unknown as typeof identifier,
    {
      "type": "array",
      "items": {
        "$ref": "./identifier.json"
      } as unknown as typeof identifier,
      "minItems": 1
    }
  ]
} as const satisfies JSONSchema