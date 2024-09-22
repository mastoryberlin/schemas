export function fromEnum<E extends object>(e: E, defaultValue?: string) {
  return {
    type: 'string',
    enum: Object.keys(e) as (keyof E)[],
    ...(defaultValue ? {
      default: defaultValue,
    } : {})
  } as const
}
