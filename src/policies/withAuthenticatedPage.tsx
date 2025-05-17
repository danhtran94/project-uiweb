import { ComponentProps, FunctionComponent } from "react";
interface withAuthenticatedPage {
  <T extends FunctionComponent<any>>(page: T): FunctionComponent<ComponentProps<T>>;
}

export const withAuthenticatedPage: withAuthenticatedPage = (Page) => {
  const Authentication: FunctionComponent<ComponentProps<typeof Page>> = (props) => {
    return <Page {...props} />;
  };

  return Authentication;
};
