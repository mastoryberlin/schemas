import type { JSONSchema } from "json-schema-to-ts"
import identifier from "./identifier"

export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "definitions": {
    "maybeScopedFlow": {
      "type": "string",
      "minLength": 1,
      "pattern": "^(\\w*/)?\\w+(\\.flow)?$"
    }
  },
  "oneOf": [
    {
      "type": "string",
      "minLength": 1,
      "pattern": "^(\\w*/)?\\w+(\\.flow)?$"
    },
    {
      "type": "object",
      "properties": {
        "src": {
          "type": "string",
          "minLength": 1,
          "pattern": "^(\\w*/)?\\w+(\\.flow)?$"
        },
        "params": {
          "type": "object",
          "propertyNames": {
            "$ref": "./identifier.json"
          } as unknown as typeof identifier
        },
        "force": {
          "type": "boolean"
        }
      },
      "additionalProperties": false,
      "required": [
        "src"
      ]
    },
    {
      "type": "object",
      "properties": {
        "inline": {
          "type": "string",
          "minLength": 1
        },
        "force": {
          "type": "boolean"
        }
      },
      "additionalProperties": false,
      "required": [
        "inline"
      ]
    }
  ]
} as const satisfies JSONSchema