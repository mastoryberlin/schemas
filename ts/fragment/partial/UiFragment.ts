import type { JSONSchema } from "json-schema-to-ts";
import type labelConfig from './label-config'
import type allowClick from '../../core/allow/click'
import type allowCollapse from '../../core/allow/collapse'
import type allowDelete from '../../core/allow/delete'
import type allowExpand from '../../core/allow/expand'
import type allowKeep from '../../core/allow/keep'
import type allowMove from '../../core/allow/move'
import type allowSelect from '../../core/allow/select'
import type allowUse from '../../core/allow/use'

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
    "zIndex": {
      /**
       * The z-index of this fragment. For non-3D fragments, this property determines
       * the drawing order of fragments, similarly to how the CSS z-index property works.
       */
      "type": "integer",
      "default": 0
    },
    "allow": {
      /**
       * Sets behavioral policies about this fragment: Can it be clicked? selected?
       * removed? etc.
       */
      "type": "object",
      "allOf": [
        {
          "$ref": "../../core/allow/click.json"
        } as unknown as typeof allowClick,
        {
          "$ref": "../../core/allow/collapse.json"
        } as unknown as typeof allowCollapse,
        {
          "$ref": "../../core/allow/delete.json"
        } as unknown as typeof allowDelete,
        {
          "$ref": "../../core/allow/expand.json"
        } as unknown as typeof allowExpand,
        {
          "$ref": "../../core/allow/keep.json"
        } as unknown as typeof allowKeep,
        {
          "$ref": "../../core/allow/move.json"
        } as unknown as typeof allowMove,
        {
          "$ref": "../../core/allow/select.json"
        } as unknown as typeof allowSelect,
        {
          "$ref": "../../core/allow/use.json"
        } as unknown as typeof allowUse
      ]
    }
  },
  "required": []
} as const satisfies JSONSchema