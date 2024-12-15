import type { JSONSchema } from "json-schema-to-ts";
import labelConfig from './label-config'
import allowClick from '../../core/allow/click'
import allowSelect from '../../core/allow/select'

export default {
  "properties": {
    "label": {
      /**
       * The label shown next to this fragment.
       * 
       * - If `true`, always display a label with default text, visibility and style.
       * - If `false`, always hide this label.
       * - If set to a string, this defines the label text.
       * - If set to an object, you can define text, visibility and style separately.
       */
      "$ref": "./label-config.json"
    } as unknown as typeof labelConfig,
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