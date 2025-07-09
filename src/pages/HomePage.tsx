import { Trans } from "@lingui/react/macro";
import { useLingui } from "@lingui/react";
import { LanguageSwitcher } from "@/components/blocks/LanguageSwitcher";
import { ThemeToggle } from "@/components/blocks/ThemeToggle";
import { tix } from "@/libs/tix";
import styles from "./HomePage.module.css";

const Button = tix({
  base: styles["home-page__button"],
  variants: {
    variant: {
      primary: styles["home-page__button--primary"] || "",
      secondary: styles["home-page__button--secondary"] || "",
    },
  },
  defaults: {
    variant: "primary",
  },
}, "button");

export const HomePage = () => {
  const { i18n } = useLingui();

  return (
    <div className={styles["home-page"]}>
      <div className={styles["home-page__container"]}>
        <div className={styles["home-page__header"]}>
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
        <div className={styles["home-page__content"]}>
          <h1 className={styles["home-page__title"]}>
            <Trans>Welcome to Project Solutions</Trans>
          </h1>

          <p className={styles["home-page__description"]}>
            <Trans>
              Modern, accessible, and high-performance solutions built with
              React 19, CSS modules, and clean architecture principles.
            </Trans>
          </p>

          <div className={styles["home-page__actions"]}>
            <Button variant="primary">
              <Trans>Get Started</Trans>
            </Button>
            <Button variant="secondary">
              <Trans>Learn More</Trans>
            </Button>
          </div>
        </div>

        <div className={styles["home-page__features"]}>
          <div className={styles["home-page__feature"]}>
            <h3 className={styles["home-page__feature-title"]}>
              <Trans>Modern Technology</Trans>
            </h3>
            <p className={styles["home-page__feature-description"]}>
              <Trans>
                Built with React 19, TypeScript, and the latest web technologies
                for optimal performance and developer experience.
              </Trans>
            </p>
          </div>

          <div className={styles["home-page__feature"]}>
            <h3 className={styles["home-page__feature-title"]}>
              <Trans>Accessibility First</Trans>
            </h3>
            <p className={styles["home-page__feature-description"]}>
              <Trans>
                Designed with accessibility in mind using React Aria components
                to ensure inclusive user experiences.
              </Trans>
            </p>
          </div>

          <div className={styles["home-page__feature"]}>
            <h3 className={styles["home-page__feature-title"]}>
              <Trans>International Ready</Trans>
            </h3>
            <p className={styles["home-page__feature-description"]}>
              <Trans>
                Full internationalization support with multiple languages and
                locale-specific formatting.
              </Trans>
            </p>
          </div>
        </div>

        <div className={styles["home-page__footer"]}>
          <p className={styles["home-page__footer-text"]}>
            <Trans>Current language: {i18n.locale}</Trans>
          </p>
        </div>
      </div>
    </div>
  );
};
