import type { JSONSchema } from "json-schema-to-ts";
import Tuple2 from '../partials/tuple2'
import Renderable2 from '../partials/renderable2'
import Color from '../partials/color'

export default {
  "$schema": "http://json-schema.org/draft-07/schema",
  "$id": "https://mastory.io/schemas/classes/Point2.json",
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
      "$ref": "../partials/color.json"
    } as unknown as typeof Color
  ],
  "unevaluatedProperties": false,
  "required": []
} as const satisfies JSONSchema