import { useLingui } from "@lingui/react";
import { Trans } from "@lingui/react/macro";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt" },
];

export const LanguageSwitcher = () => {
  const { i18n } = useLingui();

  const handleLanguageChange = (languageCode: string) => {
    i18n.activate(languageCode);
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-slate-400">
        <Trans>Language:</Trans>
      </span>
      <div className="flex space-x-1">
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              i18n.locale === language.code
                ? "bg-amber-500 text-slate-900"
                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
            }`}
          >
            {language.nativeName}
          </button>
        ))}
      </div>
    </div>
  );
};