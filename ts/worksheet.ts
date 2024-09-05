import type { JSONSchema } from "json-schema-to-ts";
import identifier from './core/identifier'
import url from './core/url'

export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://mastory.io/schemas/worksheet.json",
  "type": "object",
  "properties": {
    "$schema": {
      "type": "string"
    },
    "exercises": {
      "description": "A list of exercise IDs, or objects with `id` and `tags` properties, defining the sequence of exercises shown in this worksheet.",
      "type": "array",
      "items": {
        "oneOf": [
          {
            "$ref": "./core/identifier.json",
          } as unknown as typeof identifier,
          {
            "type": "object",
            "properties": {
              "id": {
                "$ref": "./core/identifier.json",
              } as unknown as typeof identifier,
              "tags": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "additionalProperties": false,
            "required": ["id"]
          }
        ]
      },
      "minimum": 1
    },
    "public": {
      "description": "Whether this worksheet is publicly accessible. If set to a date-string, the episode will be automatically released on that day, and announced accordingly beforehand.",
      "oneOf": [
        {
          "type": "boolean"
        },
        {
          "type": "string",
          "pattern": "^2\\d{3}-(?:(?:0[469]|11)-(?:0[1-9]|[12][0-9]|30)|(?:0[13578]|1[02])-(?:0[1-9]|[12][0-9]|3[01])|02-(?:0[1-9]|[12][0-9]))$"
        }
      ],
      "default": true,
      "examples": [
        true,
        "2024-11-30",
        false
      ]
    },
    "title": {
      "type": "string",
      "minLength": 1
    },
    "thumbnailUrl": {
      "$ref": "./core/url.json"
    } as unknown as typeof url,
    "thumbnailPosition": {
      "type": "string",
      "pattern": "(?:\\d+(?:%|px|em|in|cm)|left|center|right) (?:\\d+(?:%|px|em|in|cm)|top|center|bottom)"
    },
    "standards": {
      "type": "object",
      "properties": {
        "ccss": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "additionalProperties": false
    },
    "tags": {
      "type": "array",
      "items": {
        "$ref": "./math/tags.json"
      }
    },
    "mathTopic": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "exercises"
  ]
} as const satisfies JSONSchema