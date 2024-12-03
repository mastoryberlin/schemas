import type { JSONSchema } from "json-schema-to-ts";
import url from "./url";

export default {
  "properties": {
    "src": {
      "$ref": "./url.json"
    } as unknown as typeof url
  },
  "required": [
    "src"
  ]
} as const satisfies JSONSchema