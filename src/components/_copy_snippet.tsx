import { tix, withProps } from "@/libs/tix";

export const _CHANGE_ME = withProps<{}>(tix)(
  {
    name: "_CHANGE_ME",
    variants: {},
  },
  "button",
  (styled) => (props, ref) => {
    const [El, { ...rest }] = styled(props);

    return <El {...rest} ref={ref} />;
  }
);
