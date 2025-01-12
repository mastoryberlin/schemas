import type { JSONSchema } from "json-schema-to-ts";
import type labelConfig from "./label-config";

export default {
  "properties": {
    "text": {
      "type": "string"
    },
    "icon": {
      "type": "string"
    },
    "label": {
      "$ref": "./label-config.json"
    } as unknown as typeof labelConfig,
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
} as const satisfies JSONSchema