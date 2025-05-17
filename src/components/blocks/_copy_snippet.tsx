import { tix, withProps, tw } from "@/libs/tix";

import * as cps from "@/components";

export const _CHANGE_ME = tix(
  {
    name: "_CHANGE_ME",
    variants: {},
  },
  "div",
  (styled) => (props, ref) => {
    const [El, _props] = styled(props);

    return (
      <El {..._props} ref={ref}>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </El>
    );
  }
);
