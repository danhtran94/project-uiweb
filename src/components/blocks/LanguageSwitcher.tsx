import { useLingui } from "@lingui/react";
import { Trans } from "@lingui/react/macro";
import { tix } from "@/libs/tix";
import styles from "./LanguageSwitcher.module.css";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt" },
];

const Button = tix({
  base: styles["language-switcher__button"],
  variants: {
    active: {
      "true": styles["language-switcher__button--active"] || "",
      "false": styles["language-switcher__button--inactive"] || "",
    },
  },
  defaults: {
    active: "false",
  },
}, "button");

export const LanguageSwitcher = () => {
  const { i18n } = useLingui();

  const handleLanguageChange = (languageCode: string) => {
    i18n.activate(languageCode);
  };

  return (
    <div className={styles["language-switcher"]}>
      <span className={styles["language-switcher__label"]}>
        <Trans>Language:</Trans>
      </span>
      <div className={styles["language-switcher__buttons"]}>
        {languages.map((language) => (
          <Button
            key={language.code}
            active={i18n.locale === language.code ? "true" : "false"}
            onClick={() => handleLanguageChange(language.code)}
          >
            {language.nativeName}
          </Button>
        ))}
      </div>
    </div>
  );
};
