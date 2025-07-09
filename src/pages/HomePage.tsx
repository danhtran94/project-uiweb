import { Trans } from "@lingui/react/macro";
import { useLingui } from "@lingui/react";
import { LanguageSwitcher } from "@/components/blocks/LanguageSwitcher";

export const HomePage = () => {
  const { i18n } = useLingui();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 flex justify-end">
          <LanguageSwitcher />
        </div>
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-amber-400 md:text-6xl">
            <Trans>Welcome to Project Solutions</Trans>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl text-slate-300 md:text-2xl">
            <Trans>
              Modern, accessible, and high-performance solutions built with
              React 19, Tailwind CSS, and clean architecture principles.
            </Trans>
          </p>

          <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-amber-500 px-8 py-3 font-semibold text-slate-900 transition-colors hover:bg-amber-600">
              <Trans>Get Started</Trans>
            </button>
            <button className="rounded-lg border border-amber-400 bg-transparent px-8 py-3 font-semibold text-amber-400 transition-colors hover:bg-slate-800">
              <Trans>Learn More</Trans>
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-slate-800 p-6">
            <h3 className="mb-4 text-xl font-semibold text-amber-400">
              <Trans>Modern Technology</Trans>
            </h3>
            <p className="text-slate-300">
              <Trans>
                Built with React 19, TypeScript, and the latest web technologies
                for optimal performance and developer experience.
              </Trans>
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-6">
            <h3 className="mb-4 text-xl font-semibold text-amber-400">
              <Trans>Accessibility First</Trans>
            </h3>
            <p className="text-slate-300">
              <Trans>
                Designed with accessibility in mind using React Aria components
                to ensure inclusive user experiences.
              </Trans>
            </p>
          </div>

          <div className="rounded-lg bg-slate-800 p-6">
            <h3 className="mb-4 text-xl font-semibold text-amber-400">
              <Trans>International Ready</Trans>
            </h3>
            <p className="text-slate-300">
              <Trans>
                Full internationalization support with multiple languages and
                locale-specific formatting.
              </Trans>
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400">
            <Trans>Current language: {i18n.locale}</Trans>
          </p>
        </div>
      </div>
    </div>
  );
};
