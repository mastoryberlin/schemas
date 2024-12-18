import type { JsonSchema } from "@jsonforms/core"
import type unary from "./unary"
import type binary from "./binary"

export default {
  "$schema": "https://json-schema.org/draft/2019-09/schema",
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
          "unevaluatedProperties": false
        },
        {
          "type": "object",
          "properties": {
            "and": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/complex"
              },
              "unevaluatedItems": false
            }
          },
          "required": ["and"],
          "unevaluatedProperties": false
        },
        {
          "type": "object",
          "properties": {
            "or": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/complex"
              },
              "unevaluatedItems": false
            }
          },
          "required": ["or"],
          "unevaluatedProperties": false
        }
      ]
    }
  },
  "$ref": "#/definitions/complex"
} as const satisfies JsonSchema