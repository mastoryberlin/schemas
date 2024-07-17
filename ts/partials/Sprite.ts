import type { JSONSchema } from "json-schema-to-ts";
import Color from '../core/color'
import Url from '../core/url'

export default {
  "$id": "https://mastory.io/schemas/partials/Sprite.json",
  "type": "object",
  "properties": {
    "showPoint": {
      "type": "boolean",
      "description": "If set to `true` (default), displays a Point showing the exact location of this Sprite."
    },
    "pointColor": {
      "$ref": "../core/color.json"
    } as unknown as typeof Color,
    "src": {
      "$ref": "../core/url.json"
    } as unknown as typeof Url
  },
  "unevaluatedProperties": false
} as const satisfies JSONSchema