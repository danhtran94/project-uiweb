export function typedName<T extends string>(name: T): T {
  return name;
}

export function dotPrefixer<A extends string>(
  prefix: A
): <B extends string>(name: B) => `${A}.${B}` {
  return (name) => `${prefix}.${name}`;
}

export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

export type NonNullableNested<T> = {
  [P in keyof T]-?: NonNullableNested<NonNullable<T[P]>> extends infer O
    ? O
    : never;
};

export type NullableNestedOriginal<T> =
  T extends NonNullableNested<infer O> ? O : never;

export type Overrides<T, U> = Omit<T, keyof U> & U;

// WIP creating pathOr
export type PossibleNestedKeyOf<ObjectType extends object> = {
  // Ref: https://dev.to/pffigueiredo/typescript-utility-keyof-nested-object-2pa3
  // danhtran94
  // support nested object with null & undefined: added -? , Exclude<...>
  // modified to support array keys [key, ...key]
  [Key in keyof ObjectType & (string | number)]-?: Exclude<
    ObjectType[Key],
    undefined | null
  > extends object
    ?
        | [Key]
        | [
            Key,
            ...PossibleNestedKeyOf<Exclude<ObjectType[Key], undefined | null>>,
          ]
    : [Key];
}[keyof ObjectType & (string | number)];
