import type { JSONSchema } from "json-schema-to-ts";
import identifier from "./identifier";
export default {
  "properties": {
    "model_center": {
      /**
       * A unit variable modelling the center of the circle.
       */
      "$ref": "./identifier.json"
    } as unknown as typeof identifier,
    "model_radius": {
      /**
       * A unit variable modelling the radius of the circle.
       */
      "$ref": "./identifier.json"
    } as unknown as typeof identifier
  },
  "required": []
} as const satisfies JSONSchema