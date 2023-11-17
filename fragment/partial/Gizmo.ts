import { FromSchema, JSONSchema } from "json-schema-to-ts";

const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "properties": {
    "allowedInteractions": {
      "type": "object",
      "properties": {
        "translate": {
          "oneOf": [
            {
              "type": "boolean",
              "default": true
            },
            {
              "type": "object",
              "properties": {
                "alongXAxis": {
                  "type": "boolean",
                  "default": true
                },
                "alongYAxis": {
                  "type": "boolean",
                  "default": true
                },
                "alongZAxis": {
                  "type": "boolean",
                  "default": true
                }
              }
            }
          ]
        },
        "rotate": {
          "oneOf": [
            {
              "type": "boolean",
              "default": true
            },
            {
              "type": "object",
              "properties": {
                "aroundXAxis": {
                  "type": "boolean",
                  "default": true
                },
                "aroundYAxis": {
                  "type": "boolean",
                  "default": true
                },
                "aroundZAxis": {
                  "type": "boolean",
                  "default": true
                }
              }
            }
          ]
        },
        "scale": {
          "oneOf": [
            {
              "type": "boolean",
              "default": true
            },
            {
              "type": "object",
              "properties": {
                "inXDirection": {
                  "type": "boolean",
                  "default": true
                },
                "inYDirection": {
                  "type": "boolean",
                  "default": true
                },
                "inZDirection": {
                  "type": "boolean",
                  "default": true
                }
              }
            }
          ]
        }
      },
      "default": {
        "translate": false,
        "rotate": {
          "aroundYAxis": true
        },
        "scale": false
      }
    },
    "distanceThreshold": {
      "type": "number",
      "default": 2
    }
  }
} as const satisfies JSONSchema

export type Gizmo = FromSchema<typeof schema>