# Fragment Schemas
These schemas define the format to which JSON unit content must conform.

## `fragment.json`
This is the central point of reference for *any* fragment within a unit tree.
It contains references to the specialized schemas for each fragment class defined in the `classes` subfolder.
Since this is a very predictable structure, `fragment.json` can be auto-generated using the `update:classes` Node script; auto-generating it will also produce a backup of the original file named `fragment.json~` which serves no special purpose.

## `classes`
Contains one schema for each fragment class, defining the JSON format which must be used for a fragment of this specific class:
- A *fragment class* is referenced in a fragment by the `class` property, so setting this property to the `const` name of the class itself is always a `required` part of the fragment class schema definition.
- By declaring a fragment to be an instance of a fragment class `X`, its format will have to match the corresponding schema, and the `<Node>` component used to render it will dispatch the interpretation to the corresponding component `<FragmentX>` (defined in `~/components/Fragment/X.vue`). Typically, the `<FragmentX>` component will perform some sort of "translation" between the properties defined for it using the format defined by its specialized class-schema and the general-purpose properties of the `<FragmentBase>`.

## `partial`
Contains reusable schema snippets to be combined using `allOf` when defining new classes. In this way, they serve a purpose similar to interfaces in TypeScript - they declare a specific set of properties, along with the expected format of their values, to be allowed or required; and a complex fragment class will typically refer to several such snippets to avoid duplication of code.