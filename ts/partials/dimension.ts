import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$id": "https://mastory.io/schemas/partials/dimension.json",
  "type": "object",
  "properties": {
    "dimension": {
      "description": "Determines the dimension of the tuple, i.e. the length of the `components` array. Don't use this property when authoring content - instead, make sure to pick a class of the right dimension such as Point2, CoordinatesTuple3, etc.",
      "type": "number"
    }
  }
} as const satisfies JSONSchema