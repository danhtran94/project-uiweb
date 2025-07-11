import { useLingui } from "@lingui/react";
import { Trans } from "@lingui/react/macro";
import { cva, type VariantProps, cn } from "@/libs/utils";
import { forwardRef } from "react";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt" },
];

const buttonVariants = cva({
  base: "language-switcher__button",
  variants: {
    active: {
      true: "language-switcher__button--active",
      false: "language-switcher__button--inactive",
    },
  },
  defaultVariants: {
    active: false,
  },
});

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ active, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ active }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

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
            active={i18n.locale === language.code}
            onClick={() => handleLanguageChange(language.code)}
          >
            {language.nativeName}
          </Button>
        ))}
      </div>
    </div>
  );
};
