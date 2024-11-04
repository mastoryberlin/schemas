import type { JSONSchema } from "json-schema-to-ts"
import asset from "./asset"

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Human-readable texts and media provided for broad or intuitive understanding of the topic.",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "definition": {
      "type": "string"
    },
    "visualDescription": {
      "type": "string"
    },
    "media": {
      "oneOf": [
        {
          "$ref": "./asset.json"
        } as unknown as typeof asset,
        {
          "type": "array",
          "items": {
            "$ref": "./asset.json"
          } as unknown as typeof asset
        }
      ]
    }
  },
  "additionalProperties": false
} as const satisfies JSONSchema