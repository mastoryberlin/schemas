import type { JsonSchema } from "@jsonforms/core"

export default {
  "properties": {
    "scrollable": {
      /**
       * If true, the fragment's area can be vertically scrolled;
       * if false, the area is fixed in height - based on the available space.
       * 
       * "auto" dynamically chooses the most appropriate behavior depending on the fragment's
       * current Display and Player Relation state (default).
       */
      "oneOf": [
        {
          "type": "boolean"
        },
        {
          "const": "auto"
        }
      ]
    },
    "flex": {
      /**
       * Whether to use CSS flexboxes to dynamically arrange children based
       * on their size.
       */
      "type": "boolean"
    },
    "direction": {
      "enum": [
        "auto",
        "horizontal",
        "vertical"
      ]
    }
  },
  "required": []
} as const satisfies JsonSchema