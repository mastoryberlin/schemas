import type { JSONSchema } from "json-schema-to-ts";
import Tuple2 from '../partials/tuple2'
import Renderable2 from '../partials/renderable2'
import Sprite from '../partials/Sprite'
import Color from '../core/color'

export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://mastory.io/schemas/classes/Sprite.json",
  "allOf": [
    {
      "type": "object",
      "properties": {
        "$schema": {
          "type": "string"
        }
      }
    },
    {
      "$ref": "../partials/tuple2.json"
    } as unknown as typeof Tuple2,
    {
      "$ref": "../partials/renderable2.json"
    } as unknown as typeof Renderable2,
    {
      "$ref": "../partials/Sprite.json"
    } as unknown as typeof Sprite,
    {
      "properties": {
        "flagColor": {
          "$ref": "../core/color.json"
        } as unknown as typeof Color
      }
    }
  ],
  "unevaluatedProperties": false,
  "required": []
} as const satisfies JSONSchema