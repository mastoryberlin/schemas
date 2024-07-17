import type { JSONSchema } from "json-schema-to-ts"

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "oneOf": [
    {
      "type": "string",
      "pattern": "^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$"
    },
    {
      "type": "string",
      "enum": [
        "black",
        "white",
        "transparent",
        "orange1",
        "orange2",
        "orange3",
        "orange4",
        "orange5",
        "orange6",
        "orange7",
        "purple1",
        "purple2",
        "purple3",
        "purple4",
        "purple5",
        "purple6",
        "purple7",
        "green1",
        "red1",
        "pink1",
        "blue1"
      ]
    },
    {
      "type": "array",
      "items": {
        "type": "number",
        "minimum": 0,
        "maximum": 255
      },
      "minItems": 3,
      "maxItems": 4
    },
    {
      "type": "object",
      "properties": {
        "r": {
          "type": "number",
          "minimum": 0,
          "maximum": 255
        },
        "g": {
          "type": "number",
          "minimum": 0,
          "maximum": 255
        },
        "b": {
          "type": "number",
          "minimum": 0,
          "maximum": 255
        },
        "a": {
          "type": "number",
          "minimum": 0,
          "maximum": 255
        }
      },
      "required": [
        "r",
        "g",
        "b"
      ]
    }
  ],
  "examples": [
    "purple1",
    "#fc268d",
    [
      255,
      34,
      168
    ],
    {
      "r": 23,
      "g": 0,
      "b": 20,
      "a": 255
    }
  ]
} as const satisfies JSONSchema