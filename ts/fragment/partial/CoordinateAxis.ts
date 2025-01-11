import type { JSONSchema } from "json-schema-to-ts";

export default {
  "properties": {
    "dimension": {
      /**
       * Sets the dimension (x/y) to which this axis belongs.
       * Required.
       */
      "enum": [
        "x", "y"
      ]
    },
    "color": {
      /**
       * The color of the axis. For now, only hex values (#a34fce) are supported.
       */
      "type": "string",
      "default": "white"
    },
    "thickness": {
      /**
       * The thickness of the axis in pixels.
       */
      "type": "number",
      "default": 2
    },
    "labels": {
      /**
       * Configure labels for this axis.
       *
       * Use true or false to always show/always hide labels
       * for this axis. More elaborate config options are available
       * when using an object as value.
       */
      "oneOf": [
        {
          "type": "boolean",
          "examples": [
            true,
            false
          ]
        },
        {
          "type": "object",
          "properties": {
            "show": {
              /**
               * Defines if/when the fragment should also draw labels for this axis.
               */
              "default": true,
              "oneOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "string",
                  "enum": [
                    "never",
                    "always",
                    "when selected",
                  ]
                }
              ]
            },
            "color": {
              /**
               * The color of the labels. For now, only hex values (#a34fce) are supported.
               */
              "type": "string",
              "default": "#404040"
            },
          },
          "additionalProperties": false,
          "required": [
            "show"
          ]
        }
      ]
    },
    "gridLines": {
      /**
       * Configure grid lines matching this axis's dimension
       * (i.e. an "x" axis will draw vertical lines and vice versa).
       *
       * Use true or false to always show/always hide grid lines
       * for this axis. More elaborate config options are available
       * when using an object as value.
       */
      "oneOf": [
        {
          "type": "boolean",
          "examples": [
            true,
            false
          ]
        },
        {
          "type": "object",
          "properties": {
            "show": {
              /**
               * Defines if/when the fragment should also draw grid lines orthogonally
               * to its dimension; i.e. an "x" axis will draw vertical lines and vice versa.
               */
              "default": true,
              "oneOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "string",
                  "enum": [
                    "never",
                    "always",
                    "when selected",
                  ]
                }
              ]
            },
            "thickness": {
              /**
               * The thickness of grid lines in pixels.
               */
              "type": "number",
              "default": 1
            },
            "color": {
              /**
               * The color of the grid lines. For now, only hex values (#a34fce) are supported.
               */
              "type": "string",
              "default": "#404040"
            },
          },
          "additionalProperties": false,
          "required": [
            "show"
          ]
        }
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "dimension"
  ]
} as const satisfies JSONSchema