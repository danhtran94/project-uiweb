import { LinguiConfig } from "@lingui/conf";
import { formatter } from "@lingui/format-json";

const config: Partial<LinguiConfig> = {
  locales: ["en", "vi"],
  compileNamespace: "es",
  catalogs: [
    {
      path: "<rootDir>/src/locales/{locale}/messages",
      include: ["src"],
    },
  ],
  // format: "po",
  format: formatter({ style: "lingui" }),
};

export default config;
