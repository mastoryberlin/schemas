import type { JSONSchema } from "json-schema-to-ts";
import url from "../../core/url"

export default {
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
    /**
     * Only in "360° picture" mode:
     * The image resolution.
     */
    "resolution": {
      "type": "number"
    },
    /**
     * Only in "360° picture" mode:
     * The size of the projection sphere.
     */
    "size": {
      "type": "number"
    },
    /**
     * Only in "skybox" mode:
     * The scale applied to the projection cube.
     */
    "scale": {
      "type": "number"
    },
    /**
     * Only in "skybox" mode:
     * The blur applied to the projected texture
     * between 0 (sharp) and 1 (maximally blurred).
     */
    "blur": {
      "type": "number"
    },
  },
  "required": [
    "src"
  ]
} as const satisfies JSONSchema