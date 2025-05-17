import { Outlet, useNavigate } from "react-router-dom";

import { tix, tw } from "@/libs/tix";

import { useDispatch } from "@/model/store";

import * as cps from "@/components";

import { useState } from "react";

export const LayoutMain = tix(
  {
    name: "LayoutMain",
    base: tw`mx-auto flex min-h-svh flex-col`,
    // mx-auto max-w-sm border h-svh bg-skin`, // dev only
    variants: {},
  },
  "div",
  (styled) => (props, ref) => {
    const [El, _props] = styled(props);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const [openMenu, setOpenMenu] = useState(false);

    return (
      <El {..._props} ref={ref}>
        <div className="flex max-h-[calc(100svh-3.375rem)] grow overflow-x-auto">
          <section className="min-w-[480px] grow overflow-x-auto">
            Layout
            <Outlet />
          </section>
        </div>
      </El>
    );
  }
);
