import { useEffect, forwardRef } from "react";
import { useParams } from "react-router-dom";
import { cva, type VariantProps, cn } from "@/libs/utils";

import { useDispatch, useSelector } from "@/model/store";
import * as changeMe from "@/model/slices/_copy_snippet";

import * as cps from "@/components";
import * as bls from "@/components/blocks";
import * as shr from "@/components/shared";

const pageVariants = cva({
  base: "page-change-me",
  variants: {},
  defaultVariants: {},
});

type PageProps = React.ComponentProps<"div"> & VariantProps<typeof pageVariants>;

export const _CHANGE_ME = forwardRef<HTMLDivElement, PageProps>(
  ({ className, ...props }, ref) => {
    const dispatch = useDispatch();

    const data = useSelector(changeMe.selectById(0));

    useEffect(() => {
      dispatch(changeMe.doChangeMe({}))
        .unwrap()
        .then((res) => {})
        .catch((err) => {});
    }, []);

    return (
      <div
        ref={ref}
        className={cn(pageVariants(), className)}
        {...props}
      />
    );
  }
);

_CHANGE_ME.displayName = "_CHANGE_ME";
