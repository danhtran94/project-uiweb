import { cva, type VariantProps, cn } from "@/libs/utils";
import { forwardRef } from "react";

const componentVariants = cva({
  base: "component-name",
  variants: {
    variant: {
      primary: "component-name--primary",
      secondary: "component-name--secondary",
    },
    size: {
      small: "component-name--small",
      medium: "component-name--medium",
      large: "component-name--large",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

type ComponentProps = React.ComponentProps<"button"> & VariantProps<typeof componentVariants>;

export const _CHANGE_ME = forwardRef<HTMLButtonElement, ComponentProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(componentVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);

_CHANGE_ME.displayName = "_CHANGE_ME";
