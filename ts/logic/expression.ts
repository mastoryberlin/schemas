import type { JsonSchema } from "@jsonforms/core"
import type unary from "./unary"
import type binary from "./binary"

export default {
  "$id": "https://mastory.io/schema/logic/binary.json",
  "title": "Logical Expression",
  "definitions": {
    "simple": {
      "type": "string"
    },
    "complex": {
      "oneOf": [
        {
          "$ref": "#/definitions/simple"
        },
        {
          "type": "object",
          "properties": {
            "not": {
              "$ref": "#/definitions/complex"
            }
          },
          "required": ["not"],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "and": {
              "type": "array",
              "items": [
                {
                  "$ref": "#/definitions/complex"
                },
                {
                  "$ref": "#/definitions/complex"
                }
              ]
            }
          },
          "required": ["and"],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "or": {
              "type": "array",
              "items": [
                {
                  "$ref": "#/definitions/complex"
                },
                {
                  "$ref": "#/definitions/complex"
                }
              ]
            }
          },
          "required": ["or"],
          "additionalProperties": false
        }
      ]
    }
  },
  "$ref": "#/definitions/complex"
} as const satisfies JsonSchema