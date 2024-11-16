import type { JSONSchema } from "json-schema-to-ts";
export default {
  "properties": {
    "zoom": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "zoomSpeed": {
      "type": "number",
      "minimum": 0,
      "maximum": 100
    },
    "pan": {
      "type": "object",
      "properties": {
        "x": {
          "type": "number"
        },
        "y": {
          "type": "number"
        }
      },
      "additionalProperties": false
    },
    "allow": {
      "type": "object",
      "properties": {
        "zoom": {
          "oneOf": [
            {
              "type": "boolean"
            },
            {
              "type": "array",
              "items": [
                {
                  "type": "number"
                },
                {
                  "type": "number"
                }
              ],
              "minItems": 2,
              "maxItems": 2
            }
          ]
        },
        "pan": {
          "oneOf": [
            {
              "type": "boolean"
            },
            {
              "type": "string",
              "enum": [
                "x",
                "y"
              ]
            },
            {
              "type": "object",
              "properties": {
                "x": {
                  "oneOf": [
                    {
                      "type": "boolean"
                    },
                    {
                      "type": "array",
                      "items": [
                        {
                          "type": "number"
                        },
                        {
                          "type": "number"
                        }
                      ],
                      "minItems": 2,
                      "maxItems": 2
                    }
                  ]
                },
                "y": {
                  "oneOf": [
                    {
                      "type": "boolean"
                    },
                    {
                      "type": "array",
                      "items": [
                        {
                          "type": "number"
                        },
                        {
                          "type": "number"
                        }
                      ],
                      "minItems": 2,
                      "maxItems": 2
                    }
                  ]
                }
              },
              "additionalProperties": false
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": []
} as const satisfies JSONSchema