import type { JSONSchema } from "json-schema-to-ts";
import symbolicEqualityCheckMode from "./symbolic-equality-check-mode";

export default {
  "properties": {
    "template": {
      "type": "string"
    },
    "compareOptions": {
      "type": "object",
      "properties": {
        "mode": {
          "$ref": "./symbolic-equality-check-mode.json"
        } as unknown as typeof symbolicEqualityCheckMode,
        "autoExpand": {
          "type": "boolean",
          "default": false
        },
        "equivalentSymbols": {
          "oneOf": [
            {
              "type": "boolean"
            },
            {
              "type": "array",
              "items": {
                "oneOf": [
                  {
                    "type": "string"
                  },
                  {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "additionalProperties": false,
      "default": {
        "mode": "mathematical equivalence",
        "autoExpand": true,
        "equivalentSymbols": false
      }
    }
  },
  "required": []
} as const satisfies JSONSchema
