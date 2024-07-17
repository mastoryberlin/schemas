import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/partials/renderable2.json",
  "type": "object",
  "properties": {
    "id": {
      "$ref": "../core/identifier.json"
    },
    "visible": {
      "type": "boolean"
    },
    "label": {
      "oneOf": [
        {
          "type": "boolean"
        },
        {
          "$ref": "./renderable2-label.json"
        }
      ]
    },
    "allowedInteractions": {
      "oneOf": [
        { "type": "boolean" },
        {
          "type": "object",
          "properties": {
            "click": { "type": "boolean" },
            "select": { "type": "boolean" },
            "drag": {
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
                }
              ]
            }
          }
        }
      ]
    }
  }
} as const satisfies JSONSchema