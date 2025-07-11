import "@/styles/pages/HomePage.css";

import { Trans } from "@lingui/react/macro";
import { useLingui } from "@lingui/react";
import { LanguageSwitcher } from "@/components/blocks/LanguageSwitcher";
import { ThemeToggle } from "@/components/blocks/ThemeToggle";
import { cva, type VariantProps, cn } from "@/libs/utils";
import { forwardRef } from "react";

const buttonVariants = cva({
  base: "home-page__button",
  variants: {
    variant: {
      primary: "home-page__button--primary",
      secondary: "home-page__button--secondary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export const HomePage = () => {
  const { i18n } = useLingui();

  return (
    <div className="home-page">
      <div className="home-page__container">
        <div className="home-page__header">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
        <div className="home-page__content">
          <h1 className="home-page__title">
            <Trans>Welcome to Project Solutions</Trans>
          </h1>

          <p className="home-page__description">
            <Trans>
              Modern, accessible, and high-performance solutions built with
              React 19, BEM CSS, and clean architecture principles.
            </Trans>
          </p>

          <div className="home-page__actions">
            <Button variant="primary">
              <Trans>Get Started</Trans>
            </Button>
            <Button variant="secondary">
              <Trans>Learn More</Trans>
            </Button>
          </div>
        </div>

        <div className="home-page__features">
          <div className="home-page__feature">
            <h3 className="home-page__feature-title">
              <Trans>Modern Technology</Trans>
            </h3>
            <p className="home-page__feature-description">
              <Trans>
                Built with React 19, TypeScript, and the latest web technologies
                for optimal performance and developer experience.
              </Trans>
            </p>
          </div>

          <div className="home-page__feature">
            <h3 className="home-page__feature-title">
              <Trans>Accessibility First</Trans>
            </h3>
            <p className="home-page__feature-description">
              <Trans>
                Designed with accessibility in mind using React Aria components
                to ensure inclusive user experiences.
              </Trans>
            </p>
          </div>

          <div className="home-page__feature">
            <h3 className="home-page__feature-title">
              <Trans>International Ready</Trans>
            </h3>
            <p className="home-page__feature-description">
              <Trans>
                Full internationalization support with multiple languages and
                locale-specific formatting.
              </Trans>
            </p>
          </div>
        </div>

        <div className="home-page__footer">
          <p className="home-page__footer-text">
            <Trans>Current language: {i18n.locale}</Trans>
          </p>
        </div>
      </div>
    </div>
  );
};
