import type { JSONSchema } from "json-schema-to-ts";
import url from './core/url'

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "$schema": {
      "type": "string"
    },
    "constants": {
      "type": "object",
      "patternProperties": {
        "^[a-zA-Z_][a-zA-Z_0-9]*$": {
          "$ref": "./core/data-field.json"
        }
      },
      "default": {}
    },
    "variables": {
      "type": "object",
      "patternProperties": {
        "^[a-zA-Z_][a-zA-Z_0-9]*$": {
          "$ref": "./core/data-field.json"
        }
      },
      "unevaluatedProperties": false,
      "default": {}
    },
    "symbols": {
      "type": "object",
      "patternProperties": {
        "^[a-zA-Z_][a-zA-Z_0-9]*$": {
          "type": "string",
          "pattern": "^[a-zA-Z_][a-zA-Z_0-9]*$"
        }
      },
      "unevaluatedProperties": false,
      "default": {}
    },
    "mission": {
      "type": "object",
      "properties": {
        "sosVideo": {
          "$ref": "./core/url.json"
        } as unknown as typeof url,
        "sosThumbnail": {
          "$ref": "./core/url.json"
        } as unknown as typeof url,
        "statement": {
          "type": "string",
          "maxLength": 120
        }
      },
      "additionalProperties": false,
      "required": [
        "sosVideo",
        "sosThumbnail",
        "statement"
      ]
    },
    "self": {
      "$ref": "./fragment/classes/UnitRoot.json"
    },
    "children": {
      "type": "array",
      "items": {
        "$ref": "./fragment/fragment.json"
      }
    },
    "include": {
      "$ref": "./fragment/include.json"
    }
  },
  "required": [
    "self"
  ],
  "additionalProperties": false
} as const satisfies JSONSchema