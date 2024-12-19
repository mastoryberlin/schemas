import type { JSONSchema } from "json-schema-to-ts";
export default {
  "properties": {
    "target": {
      /**
       * The ID of a 3D (mesh) fragment which the camera must spot within the scene.
       */
      "type": "string"
    },
    "mustStayVisible": {
      /**
       * Optionally, a timeout in seconds to wait after the target
       * has become visible. If it is hidden before the
       * timeout, the activity will not finish.
       */
      "type": "number"
    }
  },
  "required": [
    "target"
  ]
} as const satisfies JSONSchema