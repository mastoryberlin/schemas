import type { FromSchema, JSONSchema } from "json-schema-to-ts";
import Renderable2Label from './renderable2-label'
import Identifier from '../core/identifier'

export default {
  "$id": "https://mastory.io/schemas/partials/renderable2.json",
  "type": "object",
  "properties": {
    "id": {
      "$ref": "../core/identifier.json"
    } as unknown as typeof Identifier,
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
        } as unknown as typeof Renderable2Label
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