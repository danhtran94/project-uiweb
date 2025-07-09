# project.solutions Website

Modern, accessible, and high-performance website for project built with React 19, CSS Modules, and Clean Architecture principles.

## 🚀 Technologies

- **Framework**: React 19 with TypeScript
- **Styling**: CSS Modules with styled-tix
- **Bundling**: Rspack (high-performance alternative to Webpack)
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM v7
- **Accessibility**: React Aria
- **Internationalization**: Lingui
- **Package Manager**: Yarn 4

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- Yarn 4+ (we use Yarn as our package manager)

```bash
# Enable Yarn
corepack enable
corepack install --global yarn@4.5.3
yarn set version 4.5.3
```

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/project-website.git
cd project-website

# Install dependencies
yarn

# Copy .env file
cp .env.example .env

# Start development server
yarn dev
```

## 🏗️ Project Structure

```
├── dist/                  # Build output
├── public/                # Static assets
├── src/
│   ├── assets/            # Fonts and other assets
│   ├── components/        # React components
│   │   ├── blocks/        # Generic reusable components without business logic
│   │   └── widgets/        # Business-specific components composed from blocks
│   ├── layouts/           # Page layouts
│   ├── libs/              # Utility libraries
│   ├── locales/           # i18n translations
│   │   ├── en/            # English translations
│   │   └── vi/            # Vietnamese translations
│   ├── model/             # Redux state management
│   │   └── slices/        # Redux slices
│   ├── pages/             # Page components
│   ├── policies/          # Policy definitions
│   ├── App.tsx            # Root component
│   ├── AppRoutes.tsx      # Application routes
│   └── main.ts            # Entry point
└── k8s/                   # Kubernetes deployment configs
```

## 🎨 Design System

This project implements the project.solutions design system using CSS Modules and design tokens, with components built for maximum accessibility and reusability.

### Design Tokens

Design tokens are implemented as CSS custom properties in `src/styles/tokens.css`:

- **Colors**: Semantic color system with slate grays and amber accents
- **Spacing**: Consistent spacing scale from 0.25rem to 8rem
- **Typography**: Font sizes, weights, and line heights
- **Border Radius**: Consistent corner radius values
- **Shadows**: Layered shadow system for depth

### Component Architecture

Components follow a modified Atomic Design approach:

1. **Blocks** (`components/blocks/`): Generic reusable components without business logic
2. **Widgets** (`components/widgets/`): Business-specific components composed from blocks
3. **Layouts** (`layouts/`): Page-level structures
4. **Pages** (`pages/`): Complete pages with content

### Styling Approach

We use CSS Modules with BEM methodology and styled-tix for component variants:

- **Scoped Styles**: Each component has its own `.module.css` file
- **BEM Naming**: Block Element Modifier methodology for clear, semantic class names
- **Nested Syntax**: PostCSS nested syntax with `&` for better readability
- **Design Tokens**: CSS custom properties for consistent theming
- **Variant System**: styled-tix provides type-safe component variants
- **PostCSS**: Support for imports and nested CSS

#### BEM Methodology with Nested Syntax

BEM (Block Element Modifier) provides a clear naming convention, enhanced with nested syntax:

- **Block**: The main component (e.g., `home-page`, `language-switcher`)
- **Element**: Parts of the block using `&__element` (e.g., `&__title`, `&__button`)
- **Modifier**: Variations using `&--modifier` (e.g., `&--primary`, `&--active`)
- **Nested Structure**: Logical hierarchy that mirrors the component structure

## 🧠 Architecture

### Domain-Driven Design (DDD)

We follow DDD principles with clearly defined bounded contexts:

- Each business domain is separated to maintain clean, maintainable code
- Models use value objects for entity attributes
- Aggregates remain small and focused on single responsibilities
- Domain events trigger business transactions

## 🌐 Internationalization

The project uses Lingui for internationalization:

```bash
# Extract messages for translation
yarn lang-extract

# Compile translations
yarn lang-compile
```

## 🧪 Development Guidelines

### Component Creation

When creating new components:

1. Follow the component hierarchy (blocks → widgets → layouts → pages)
2. Implement accessibility using React Aria
3. Use CSS Modules with styled-tix for styling
4. Leverage design tokens for consistent theming
5. Write comprehensive tests
6. Document component usage

### Styling Example

We use CSS Modules with BEM methodology, nested syntax, and styled-tix for component variants:

```css
/* Button.module.css - BEM with nested syntax */
.button {
  padding: var(--space-3) var(--space-8);
  border-radius: var(--border-radius-lg);
  font-weight: var(--font-weight-semibold);
  transition: var(--transition-colors);
  border: none;
  cursor: pointer;

  &--primary {
    background-color: var(--color-accent);
    color: var(--color-accent-text);

    &:hover {
      background-color: var(--color-accent-hover);
    }
  }

  &--secondary {
    background-color: transparent;
    color: var(--color-accent);
    border: 1px solid var(--color-accent);

    &:hover {
      background-color: var(--color-slate-800);
    }
  }
}
```

```typescript
// Button.tsx
import { tix } from "@/libs/tix";
import styles from "./Button.module.css";

export const Button = tix({
  base: styles["button"],
  variants: {
    variant: {
      primary: styles["button--primary"],
      secondary: styles["button--secondary"],
    },
  },
  defaults: {
    variant: "primary",
  },
}, "button");
```

## 🚢 Building and Deployment

### Build for Production

```bash
# Build for production
yarn build
```

### Kubernetes Deployment

Kubernetes deployment templates are available in the `k8s/` directory:

```bash
# Update Kubernetes deployment
kubectl apply -f k8s/deployment.yaml
```

## 📚 Further Documentation

- [Design System Documentation](../design-systems/README.md)
- [Component API Reference](./docs/components.md)
- [Redux Store Documentation](./docs/redux.md)
- [Accessibility Guidelines](./docs/accessibility.md)

## 📖 Architecture Reference Resources

The architectural patterns and implementation strategies in this project are informed by the following key reference resources:

### Design System & Component Patterns

- **[atomic_design_and_design_systems.md]**: Methodology for building design systems from fundamental building blocks (atoms, molecules, organisms, templates, pages)
- **[developer_friendly_component_hierarchy.md]**: Modified Atomic Design terminology with clear separation of concerns:
  - **Block Components** (components/blocks): Generic reusable components without business logic
  - **Widget Components** (components/widgets): Business-specific components composed from blocks with app logic
  - **Layout Components** (layouts): Page-level structures
  - **Page Components** (pages): Complete pages with content

### Design Tokens

- **[design_tokens_foundation.md]**: Implementation of visual design attributes as named entities:
  - Color tokens (brand, UI states, text, background)
  - Typography tokens (font families, weights, sizes, line heights)
  - Spacing tokens (margin, padding scales)
  - Border and shadow tokens
  - Animation and motion tokens
  - Responsive breakpoint tokens

### Technology-Specific Implementations

- **[react_typescript_design_system.md]**: Type-safe implementation patterns for design systems in React and TypeScript
- **[styled-tix-analysis.md]**: Variant-based styling with CSS Modules using the styled-tix library:
  - Variant system (boolean, object, and function variants)
  - Component polymorphism with CSS Modules
  - Type safety and extensibility

### Accessibility Implementation

- **[react-aria-overview.md]**: Accessibility-first component implementation with React Aria
- **[react-aria-components-list.md]**: Available unstyled components for accessible UI development
- **[react-aria-styling-guide.md]**: Approaches for styling React Aria components:
  - CSS Class Names with CSS Modules
  - Data Attributes for States
  - Render Props for dynamic styling
  - CSS Variables (design tokens)
  - styled-tix integration
