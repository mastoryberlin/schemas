import type { JSONSchema } from "json-schema-to-ts"
import cursor from '../../core/cursor'

export default {
  "properties": {
    "selectedHighlightColor": {
      "type": "array",
      "minItems": 3,
      "maxItems": 3,
      "items": {
        "type": "number",
        "minimum": 0,
        "maximum": 1
      },
      "default": [
        0,
        0,
        1
      ]
    },
    "hoverCursor": {
      "allOf": [
        {
          "$ref": "../../core/cursor.json"
        } as unknown as typeof cursor,
        {
          "default": "pointer"
        }
      ]
    },
    "hoverHighlightColor": {
      "type": "array",
      "minItems": 3,
      "maxItems": 3,
      "items": {
        "type": "number",
        "minimum": 0,
        "maximum": 1
      },
      "default": [
        0,
        1,
        0
      ]
    },
    "lockedCursor": {
      "allOf": [
        {
          "$ref": "../../core/cursor.json"
        } as unknown as typeof cursor,
        {
          "default": "not-allowed"
        }
      ]
    },
    "lockedHighlightColor": {
      "type": "array",
      "minItems": 3,
      "maxItems": 3,
      "items": {
        "type": "number",
        "minimum": 0,
        "maximum": 1
      },
      "default": [
        1,
        0,
        0
      ]
    },
    "checkCollisions": {
      "type": "boolean",
      "default": true
    }
  },
  "required": []
} as const satisfies JSONSchema