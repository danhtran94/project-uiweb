import { i18n } from "@lingui/core";

import { messages as en } from "@/locales/en/messages.mjs";
import { messages as vi } from "@/locales/vi/messages.mjs";

const allMessages = {
  en,
  vi,
};

type Locale = keyof typeof allMessages;

const defaultLocale: Locale = "en";

i18n.load(allMessages);
i18n.activate(defaultLocale);

export { i18n, defaultLocale };
