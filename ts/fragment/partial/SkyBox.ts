import type { JSONSchema } from "json-schema-to-ts";
import url from "../../core/url"

export default {
  /**
   * A skybox for a 3D scene, making it look as if the player was placed within an entire landscape.
   */
  "properties": {
    "src": {
      "$ref": "../../core/url.json"
    } as unknown as typeof url,
    "mode": {
      "enum": [
        "skybox",
        "360° picture"
      ],
      "default": "skybox"
    },
    "resolution": {
      /**
       * Only in "360° picture" mode:
       * The image resolution.
       */
      "type": "number"
    },
    "size": {
      /**
       * Only in "360° picture" mode:
       * The size of the projection sphere.
       */
      "type": "number"
    },
    "scale": {
      /**
       * Only in "skybox" mode:
       * The scale applied to the projection cube.
       */
      "type": "number"
    },
    "blur": {
      /**
       * Only in "skybox" mode:
       * The blur applied to the projected texture
       * between 0 (sharp) and 1 (maximally blurred).
       */
      "type": "number"
    },
  },
  "required": [
    "src"
  ]
} as const satisfies JSONSchema