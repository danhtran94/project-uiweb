import { newTix } from "styled-tix";

export * from "styled-tix";
export type * from "styled-tix/dist/esm/types";

// Simple class merger for CSS modules - just joins classes with spaces
const cssModulesMerger = (classes: string[]) => classes.filter(Boolean).join(" ");

export const tix = newTix(cssModulesMerger);

// Helper function to create tix components with CSS modules
export const createTix = <T extends Record<string, any>>(
  config: Parameters<typeof tix>[0],
  element: Parameters<typeof tix>[1],
  styles?: T
) => {
  // If styles object is provided, map class names to CSS modules
  if (styles) {
    const processedConfig = {
      ...config,
      base: styles[config.base as string] || config.base,
      variants: config.variants ? processVariants(config.variants, styles) : undefined,
    };
    return tix(processedConfig, element);
  }
  
  return tix(config, element);
};

// Helper function to process variants with CSS modules
function processVariants(variants: any, styles: Record<string, any>) {
  const processedVariants: any = {};
  
  for (const [variantName, variantValues] of Object.entries(variants)) {
    processedVariants[variantName] = {};
    
    for (const [key, value] of Object.entries(variantValues as any)) {
      if (typeof value === 'string') {
        processedVariants[variantName][key] = styles[value] || value;
      } else {
        processedVariants[variantName][key] = value;
      }
    }
  }
  
  return processedVariants;
}

export default createTix;
