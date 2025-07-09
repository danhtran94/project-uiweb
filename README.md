# project.solutions Website

Modern, accessible, and high-performance website for project built with React 19, Tailwind CSS, and Clean Architecture principles.

## 🚀 Technologies

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with styled-tix
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

This project implements the project.solutions design system using Atomic Design principles, with components built for maximum accessibility and reusability.

### Typography System

Our typography system uses a modular scale of 1.25 with the following font families:

- **Primary**: Inter (UI elements, body text)
- **Secondary**: DM Sans (marketing, special content)
- **Serif**: Atlante (editorial content, multilingual)
- **Monospace**: System monospace (code, technical content)

Typography scales from display (3.815rem) to caption (0.75rem) with carefully defined line heights and letter spacing.

### Color System

- **Background**: Deep blue (#0F172A) with lighter secondary (#1E293B)
- **Primary Accent**: Amber/gold (#F59E0B)
- **Text**: Primary (#F8FAFC) and secondary (#94A3B8)
- **State Colors**: Success, warning, error, and info

### Component Architecture

Components follow Atomic Design principles:

1. **Atoms**: Basic UI elements (buttons, inputs, icons)
2. **Molecules**: Combinations of atoms (form fields, search bars)
3. **Organisms**: Complex components (navigation bars, headers, cards)
4. **Templates**: Page layouts without specific content
5. **Pages**: Specific instances of templates with real content

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

1. Follow Atomic Design principles
2. Implement accessibility using React Aria
3. Use styled-tix with Tailwind for styling
4. Write comprehensive tests
5. Document component usage

### Styling Approach

We use `styled-tix` combined with Tailwind CSS:

```typescript
export const Button = tix(
  {
    name: "Button",
    base: tw`rounded-md px-4 py-2 font-medium`,
    variants: {
      variant: {
        primary: tw`bg-amber-500 text-slate-900 hover:bg-amber-600`,
        secondary: tw`bg-slate-700 text-white hover:bg-slate-600`,
      },
      size: {
        sm: tw`px-3 py-1 text-sm`,
        md: tw`px-4 py-2 text-base`,
        lg: tw`px-5 py-3 text-lg`,
      },
    },
    defaults: {
      variant: "primary",
      size: "md",
    },
  },
  "button"
);
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
- **[styled-tix-analysis.md]**: Variant-based styling with Tailwind CSS using the styled-tix library:
  - Variant system (boolean, object, and function variants)
  - Component polymorphism
  - Type safety and extensibility

### Accessibility Implementation

- **[react-aria-overview.md]**: Accessibility-first component implementation with React Aria
- **[react-aria-components-list.md]**: Available unstyled components for accessible UI development
- **[react-aria-styling-guide.md]**: Approaches for styling React Aria components:
  - CSS Class Names
  - Data Attributes for States
  - Render Props for dynamic styling
  - CSS Variables
  - Tailwind CSS integration
