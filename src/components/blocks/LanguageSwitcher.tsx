import { useLingui } from "@lingui/react";
import { Trans } from "@lingui/react/macro";
import { tix } from "@/libs/tix";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt" },
];

const Button = tix({
  base: "language-switcher__button",
  variants: {
    active: {
      "true": "language-switcher__button--active",
      "false": "language-switcher__button--inactive",
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
    <div className="language-switcher">
      <span className="language-switcher__label">
        <Trans>Language:</Trans>
      </span>
      <div className="language-switcher__buttons">
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
