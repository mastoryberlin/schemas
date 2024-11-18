import type { JSONSchema } from "json-schema-to-ts";
import allowClick from '../../core/allow/click'
import allowSelect from '../../core/allow/select'

export default {
  "properties": {
    "allow": {
      /**
       * Sets behavioral policies, such as: can this element be clicked? selected? dragged away?
       */
      "type": "object",
      "allOf": [
        {
          "$ref": "../../core/allow/click.json"
        } as unknown as typeof allowClick,
        {
          "$ref": "../../core/allow/select.json"
        } as unknown as typeof allowSelect
      ]
    }
  },
  "required": []
} as const satisfies JSONSchema