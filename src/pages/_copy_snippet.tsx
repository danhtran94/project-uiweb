import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { tix, tw } from "@/libs/tix";

import { useDispatch, useSelector } from "@/model/store";
import * as changeMe from "@/model/slices/_copy_snippet";

import * as cps from "@/components";
import * as bls from "@/components/blocks";
import * as shr from "@/components/shared";

export const _CHANGE_ME = tix(
  {
    name: "Page_CHANGE_ME",
    base: tw``,
    variants: {},
  },
  "div",
  (styled) => (props, ref) => {
    const dispatch = useDispatch();

    const data = useSelector(changeMe.selectById(0));

    useEffect(() => {
      dispatch(changeMe.doChangeMe({}))
        .unwrap()
        .then((res) => {})
        .catch((err) => {});
    }, []);

    const [El, _props] = styled(props);
    return <El {..._props} ref={ref}></El>;
  }
);
