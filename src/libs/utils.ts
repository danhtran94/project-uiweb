import { cva, type VariantProps } from "cva";
import { clsx, type ClassValue } from "clsx";

// Class name utility for conditional classnames - uses clsx for better conditional logic
export const cn = (...classes: ClassValue[]) => clsx(classes);

// Export cva, clsx and types for component variants
export { cva, type VariantProps, clsx };
