import { cva, type VariantProps, cn } from "@/libs/utils";
import { forwardRef } from "react";

import * as cps from "@/components";

const componentVariants = cva({
  base: "component-change-me",
  variants: {},
  defaultVariants: {},
});

type ComponentProps = React.ComponentProps<"div"> & VariantProps<typeof componentVariants>;

export const _CHANGE_ME = forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants(), className)}
        {...props}
      >
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    );
  }
);

_CHANGE_ME.displayName = "_CHANGE_ME";
