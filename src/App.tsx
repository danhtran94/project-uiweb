import { BrowserRouter } from "react-router-dom";
import { I18nProvider } from "@lingui/react";
import { Provider as ReduxProvider } from "react-redux";

import { i18n } from "@/locales/i18n";
import { store } from "@/model/store";
import { ThemeProvider } from "@/libs/theme";

import { AppRoutes } from "./AppRoutes";
import * as cps from "@/components";

export const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <I18nProvider i18n={i18n}>
          <AppRoutes />
        </I18nProvider>
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>
);
