import type { JSONSchema } from 'json-schema-to-ts'

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "oneOf": [
    {
      "type": "boolean"
    },
    {
      "type": "number"
    },
    {
      "type": "string"
    },
    {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "text": {
          /**
           * The label's text content.
           */
          "type": "string",
          "default": "{id}",
          "examples": [
            3.141,
            "`\\pi`",
            "mixed text and latex `\\sqrt{2}`",
            "`{id}` = `{value}` (number/scale/area/...)",
            "can you make `{id} \\approx -\\frac{pi}{2} r^2` ?"
          ]
        },
        "show": {
          /**
           * Defines if/when the label is shown.
           * "auto" defaults to "always" for the main label (position) of a fragment, and to "never" for all other labels.
           */
          "default": "auto",
          "oneOf": [
            {
              "type": "boolean"
            }, {
              "type": "string",
              "enum": [
                "never",
                "always",
                "auto",
                "when selected",
                "on hover"
              ]
            }
          ]
        },
        "color": {
          /**
           * The label color. For now, only hex values (#a34fce) are supported.
           */
          "type": "string",
          "default": "auto"
        }
      }
    }
  ],
  "examples": [
    true,
    false,
    3.141,
    "`\\pi`",
    "mixed text and latex `\\sqrt{2}`",
    {
      "mode": "id"
    },
    {
      "mode": "value"
    },
    "`{id}` = `{value}` (number/scale/area/...)",
    {
      "label1": "custom text",
      "label2": {
        "mode": "value"
      },
      "label3": "can you make `{id} \\approx -\\frac{pi}{2} r^2` ?"
    }
  ]
} as const satisfies JSONSchema