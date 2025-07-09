import { newTix } from "styled-tix";

export * from "styled-tix";
export type * from "styled-tix/dist/esm/types";

// Simple class merger for BEM CSS - just joins classes with spaces
const bemClassMerger = (classes: string[]) => classes.filter(Boolean).join(" ");

export const tix = newTix(bemClassMerger);
