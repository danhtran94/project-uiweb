# project.solutions Website

Modern, accessible, and high-performance website for project built with React 19, BEM CSS, and Clean Architecture principles.

## 🚀 Technologies

- **Framework**: React 19 with TypeScript
- **Styling**: BEM CSS with CVA (Class Variance Authority) and design tokens
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

This project implements the project.solutions design system using BEM CSS methodology and design tokens, with components built for maximum accessibility and reusability.

### Design Tokens

Design tokens are implemented as CSS custom properties in `src/styles/tokens.css`:

- **Colors**: Semantic color system with light/dark theme support
- **Spacing**: Consistent spacing scale from 0.25rem to 8rem
- **Typography**: Font sizes, weights, and line heights
- **Border Radius**: Consistent corner radius values
- **Shadows**: Layered shadow system for depth
- **Transitions**: Smooth animation properties

### Component Architecture

Components follow a modified Atomic Design approach:

1. **Blocks** (`components/blocks/`): Generic reusable components without business logic
2. **Widgets** (`components/widgets/`): Business-specific components composed from blocks
3. **Layouts** (`layouts/`): Page-level structures
4. **Pages** (`pages/`): Complete pages with content

### Styling Approach

We use BEM CSS methodology with nested syntax and CVA for component variants:

- **BEM Naming**: Block Element Modifier methodology for clear, semantic class names
- **Nested Syntax**: PostCSS nested syntax with `&` for better readability
- **Design Tokens**: CSS custom properties for consistent theming
- **Theme System**: Light/dark theme support with CSS custom properties
- **Variant System**: CVA provides type-safe component variants with clsx for conditional classnames
- **PostCSS**: Support for imports and nested CSS
- **Organized Structure**: Styles organized in `src/styles/` with logical grouping

#### BEM Methodology with Nested Syntax

BEM (Block Element Modifier) provides excellent style isolation and naming conventions:

- **Block**: The main component (e.g., `home-page`, `language-switcher`, `theme-toggle`)
- **Element**: Parts of the block using `&__element` (e.g., `&__title`, `&__button`, `&__slider`)
- **Modifier**: Variations using `&--modifier` (e.g., `&--primary`, `&--active`, `&--inactive`)
- **Nested Structure**: Logical hierarchy that mirrors the component structure
- **Theme Support**: CSS custom properties that automatically adapt to light/dark themes

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
3. Use BEM CSS with CVA for styling
4. Leverage design tokens for consistent theming
5. Write comprehensive tests
6. Document component usage

### Styling Example

We use BEM CSS methodology with nested syntax and CVA for component variants:

```css
/* Button.css - BEM with nested syntax */
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
      background-color: var(--color-background-secondary);
    }
  }
}
```

```typescript
// Button.tsx
import { cva, type VariantProps, cn } from "@/libs/utils";
import { forwardRef } from "react";

const buttonVariants = cva({
  base: "button",
  variants: {
    variant: {
      primary: "button--primary",
      secondary: "button--secondary",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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

- [Development Guidelines](./CLAUDE.md) - Comprehensive guide for working with this codebase
- [Copy Snippet Templates](./src/components/_copy_snippet.tsx) - Templates for new developers
- [Design Tokens](./src/styles/tokens.css) - CSS custom properties for theming
- [Project Structure](./CLAUDE.md#project-structure) - Detailed architecture overview

## 🧪 Developer Onboarding

### Copy Snippet Templates

This project includes template files to help new developers get started quickly:

- **Component Template** (`src/components/_copy_snippet.tsx`): Shows CVA + BEM patterns with proper TypeScript typing
- **Page Template** (`src/pages/_copy_snippet.tsx`): Demonstrates Redux integration and page structure  
- **Redux Slice Template** (`src/model/slices/_copy_snippet.ts`): Example of async thunks and state management

### Usage

1. Copy the appropriate template file for your feature
2. Rename and modify according to your component needs
3. Follow the established patterns for consistency
4. Update imports and exports as needed

## 🏗️ Architecture Principles

### Modified Atomic Design

- **Blocks** (`components/blocks/`): Generic, reusable components without business logic
- **Widgets** (`components/widgets/`): Business-specific components composed from blocks  
- **Layouts** (`layouts/`): Page-level structures and templates
- **Pages** (`pages/`): Complete pages with content and routing

### Design Token System

Our design system uses CSS custom properties for consistent theming:

- **Semantic Tokens**: Abstract color, spacing, and typography values
- **Theme Support**: Automatic light/dark mode switching via `data-theme` attribute
- **Responsive Design**: Consistent breakpoints and spacing scales
- **Accessibility**: High contrast ratios and accessible color combinations
