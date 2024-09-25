import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "properties": {
    "$schema": {
      "type": "string"
    },
    "gpt-params": {
      "type": "object",
      "properties": {
        "role": {
          "type": "string",
          "description": "(non-OpenAI API) If given, prepends a system message with the string as `content` to the messages array which is passed to ChatGPT.",
          "minLength": 1
        },
        "model": {
          "type": "string",
          "description": "ID of the model to use. See the [model endpoint compatibility](https://platform.openai.com/docs/models/model-endpoint-compatibility) table for details on which models work with the Chat API.",
          "$ref": "../models.json#/$defs/modelName",
          "default": "gpt-3.5-turbo-1106"
        },
        "frequency_penalty": {
          "type": "number",
          "description": "Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim. Defaults to `0` [See more information about frequency and presence penalties.](https://platform.openai.com/docs/guides/gpt/parameter-details)",
          "minimum": -2,
          "maximum": 2,
          "default": 0
        },
        "logit_bias": {
          "type": "number",
          "description": "Modify the likelihood of specified tokens appearing in the completion. Accepts a JSON object that maps tokens(specified by their token ID in the tokenizer) to an associated bias value from - 100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling.The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token."
        },
        "max_tokens": {
          "type": "number",
          "description": "The maximum number of [tokens](https://platform.openai.com/tokenizer) to generate in the chat completion. The total length of input tokens and generated tokens is limited by the model's context length. [Example Python code for counting tokens.](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) Defaults to `Infinity`",
          "default": 10000000000
        },
        "presence_penalty": {
          "type": "number",
          "description": "Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics. [See more information about frequency and presence penalties.](https://platform.openai.com/docs/guides/gpt/parameter-details)",
          "minimum": -2,
          "maximum": 2,
          "default": 0
        },
        "seed": {
          "type": "integer",
          "description": "This feature is in Beta. If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result. Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend."
        },
        "stop": {
          "oneOf": [
            {
              "type": "string",
              "minLength": 1
            },
            {
              "type": "array",
              "items": {
                "type": "string",
                "minLength": 1
              },
              "minItems": 1,
              "maxItems": 4
            }
          ],
          "description": "Up to 4 sequences where the API will stop generating further tokens."
        },
        "temperature": {
          "type": "number",
          "description": "What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both.",
          "default": 1
        },
        "top_p": {
          "type": "number",
          "description": "An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.So 0.1 means only the tokens comprising the top 10 % probability mass are considered. We generally recommend altering this or temperature but not both.",
          "default": 1
        }
      },
      "additionalProperties": false
    },
    "functions": {
      "type": "object",
      "properties": {
        "available": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "check_numeric_input",
              "get_component_code",
              "get_components",
              "get_flow_syntax",
              "get_main_jsonc",
              "get_main_ts",
              "get_math_class",
              "get_math_classes",
              "get_npcs",
              "get_type_info"
            ]
          }
        },
        "call": {
          "type": "array",
          "items": {
            "oneOf": [
              {
                "type": "object",
                "properties": {
                  "name": {
                    "const": "check_numeric_input"
                  },
                  "parameters": {
                    "$ref": "../functions/check_numeric_input/params.json"
                  }
                },
                "required": [
                  "name",
                  "parameters"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "name": {
                    "const": "get_component_code"
                  },
                  "parameters": {
                    "$ref": "../functions/get_component_code/params.json"
                  }
                },
                "required": [
                  "name",
                  "parameters"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "name": {
                    "const": "get_components"
                  },
                  "parameters": {
                    "$ref": "../functions/get_components/params.json"
                  }
                },
                "required": [
                  "name"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "name": {
                    "const": "get_flow_syntax"
                  },
                  "parameters": {
                    "$ref": "../functions/get_flow_syntax/params.json"
                  }
                },
                "required": [
                  "name"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "name": {
                    "const": "get_main_jsonc"
                  },
                  "parameters": {
                    "$ref": "../functions/get_main_jsonc/params.json"
                  }
                },
                "required": [
                  "name",
                  "parameters"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "name": {
                    "const": "get_main_ts"
                  },
                  "parameters": {
                    "$ref": "../functions/get_main_ts/params.json"
                  }
                },
                "required": [
                  "name",
                  "parameters"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "name": {
                    "const": "get_math_class"
                  },
                  "parameters": {
                    "$ref": "../functions/get_math_class/params.json"
                  }
                },
                "required": [
                  "name",
                  "parameters"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "name": {
                    "const": "get_math_classes"
                  },
                  "parameters": {
                    "$ref": "../functions/get_math_classes/params.json"
                  }
                },
                "required": [
                  "name"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "name": {
                    "const": "get_npcs"
                  },
                  "parameters": {
                    "$ref": "../functions/get_npcs/params.json"
                  }
                },
                "required": [
                  "name"
                ]
              },
              {
                "type": "object",
                "properties": {
                  "name": {
                    "const": "get_type_info"
                  },
                  "parameters": {
                    "$ref": "../functions/get_type_info/params.json"
                  }
                },
                "required": [
                  "name",
                  "parameters"
                ]
              }
            ]
          }
        }
      }
    },
    "examples": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          },
          "in": {
            "type": "object"
          },
          "out": {
            "type": "object"
          }
        },
        "required": [
          "in",
          "out"
        ],
        "additionalProperties": false
      }
    }
  },
  "additionalProperties": false
} as const satisfies JSONSchema