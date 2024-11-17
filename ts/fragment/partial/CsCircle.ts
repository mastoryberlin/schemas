import type { JSONSchema } from "json-schema-to-ts";
import labelConfig from './label-config'

export default {
  "properties": {
    "label": {
      /**
       * The label shown next to this fragment.
       * 
       * You can use shortcuts to configure one label with default positioning,
       * or use object notation to define separate label behaviors for each
       * available position.
       * 
       * - If `true`, always display a label with default text, visibility and style.
       * - If `false`, always hide this label.
       * - If set to a string, this defines the label text.
       * - If set to an object, you can define text, visibility and style separately.
       */
      "oneOf": [
        {
          "$ref": "./label-config.json"
        } as unknown as typeof labelConfig,
        {
          "type": "object",
          "properties": {
            "center": {
              /**
               * The circle center. 
               */
              "$ref": "./label-config.json"
            } as unknown as typeof labelConfig
          },
          "additionalProperties": false
        }
      ]
    },
    "radius": {
      "oneOf": [
        {
          "type": "string"
        },
        {
          "type": "number"
        }
      ]
    }
  },
  "required": [
    "radius"
  ]
} as const satisfies JSONSchema