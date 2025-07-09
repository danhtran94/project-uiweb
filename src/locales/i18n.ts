import { i18n } from "@lingui/core";

import { messages as en } from "@/locales/en/messages.mjs";
import { messages as vi } from "@/locales/vi/messages.mjs";

const allMessages = {
  en,
  vi,
};

type Locale = keyof typeof allMessages;

const defaultLocale: Locale = "en";

// Load all messages
i18n.load(allMessages);

// Get saved language from localStorage or use default
const savedLocale = localStorage.getItem("language") as Locale || defaultLocale;
i18n.activate(savedLocale);

// Save language preference when it changes
const originalActivate = i18n.activate;
i18n.activate = (locale: string) => {
  localStorage.setItem("language", locale);
  return originalActivate.call(i18n, locale);
};

export { i18n, defaultLocale, allMessages };
export type { Locale };
