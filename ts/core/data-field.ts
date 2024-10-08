import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "oneOf": [
    {
      "$ref": "../classes/pi/renderable2.json"
    },
    {
      "type": "array",
      "minItems": 2,
      "maxItems": 2,
      "items": [
        {
          "type": "string",
          "const": "Array"
        },
        {
          "type": "array",
          "items": {
            "$ref": "../classes/pi/renderable2.json"
          }
        }
      ]
    },
    {
      "type": "array",
      "maxItems": 1
    },
    {
      "type": "array",
      "minItems": 3
    },
    {
      "type": "array",
      "minItems": 2,
      "maxItems": 2,
      "items": [
        {
          "oneOf": [
            {
              "type": "array"
            },
            {
              "type": "boolean"
            },
            {
              "type": "null"
            },
            {
              "type": "number"
            },
            {
              "type": "object"
            }
          ]
        }
      ]
    },
    {
      "type": "array",
      "minItems": 2,
      "maxItems": 2,
      "items": [
        {
          "type": "string"
        },
        {
          "oneOf": [
            {
              "type": "boolean"
            },
            {
              "type": "null"
            },
            {
              "type": "number"
            },
            {
              "type": "string"
            }
          ]
        }
      ]
    },
    {
      "type": "boolean"
    },
    {
      "type": "null"
    },
    {
      "type": "number"
    },
    {
      "type": "object"
    },
    {
      "type": "string"
    }
  ]
} as const satisfies JSONSchema