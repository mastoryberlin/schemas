import { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Root",
  "type": "object",
  "properties": {
    "$schema": true,
    "orca": {
      "type": "object",
      "properties": {
        "status_on_agent_event": {
          "type": "object",
          "properties": {
            "active": {
              "type": "string"
            },
            "finished": {
              "type": "string"
            }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false
    },
    "project": {
      "type": "object",
      "properties": {
        "number": {
          "type": "number"
        },
        "id": {
          "type": "string"
        },
        "status_field": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "options": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "name": {
                    "type": "string"
                  }
                },
                "additionalProperties": false,
                "required": [
                  "id",
                  "name"
                ]
              }
            }
          },
          "additionalProperties": false,
          "required": [
            "id",
            "options"
          ]
        }
      },
      "additionalProperties": false,
      "required": [
        "number",
        "id",
        "status_field"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "project"
  ]
} as const satisfies JSONSchema