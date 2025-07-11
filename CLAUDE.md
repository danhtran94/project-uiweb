# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

IMPORTANT: @~/.claude/agents/ai-pair-programming-partner/CLAUDE.md

## Development Commands

### Core Development Tasks

- `yarn dev` - Start development server on port 8080 with hot reloading
- `yarn build` - Build for production (includes TypeScript checking and cleanup)
- `yarn lang-extract` - Extract i18n messages for translation
- `yarn lang-compile` - Compile i18n translations
- `yarn deps-update` - Check for dependency updates
- `yarn deps-upgrade` - Update dependencies and install

### Code Quality

- No specific lint/test commands configured - use `tsc --noEmit` for type checking
- Build command includes TypeScript checking: `tsc --noEmit`

## Architecture Overview

### Technology Stack

- **Frontend**: React 19 with TypeScript, React Router DOM v7
- **Build Tool**: Rspack (high-performance webpack alternative) with SWC
- **Styling**: BEM CSS with CVA (Class Variance Authority) for component variants
- **State Management**: Redux Toolkit with typed hooks
- **i18n**: Lingui for internationalization (English/Vietnamese)
- **Accessibility**: React Aria components
- **Package Manager**: Yarn 4

### Project Structure

```
src/
├── components/           # React components (atomic design)
│   ├── blocks/          # Generic reusable components without business logic
│   └── widgets/         # Business-specific components composed from blocks
├── layouts/             # Page layouts
├── pages/               # Page components
├── model/               # Redux state management
│   ├── slices/         # Redux slices
│   ├── store.ts        # Store configuration
│   └── thunk.ts        # Async actions
├── libs/                # Utility libraries
├── locales/             # i18n translations (en/vi)
├── assets/              # Static assets (fonts, icons)
├── policies/            # HOCs and policies
├── App.tsx              # Root component with providers
└── AppRoutes.tsx        # Route definitions
```

### Key Patterns

#### Component Architecture

- Follows Atomic Design with modified hierarchy:
  - **components/blocks/**: Generic reusable components without business logic
  - **components/widgets/**: Business-specific components composed from blocks with app logic
  - **layouts/**: Page-level structures (templates)
  - **pages/**: Complete pages with content
- Uses CVA (Class Variance Authority) for variant-based styling with BEM CSS
- All components should be accessible using React Aria

#### State Management

- Redux Toolkit with typed hooks: `useSelector`, `useDispatch`
- Custom selector hooks with shallow equality checking
- Store configured with serializable check disabled
- Slices follow standard Redux Toolkit patterns

#### Styling System

- BEM CSS methodology for scoped, semantic class names
- CSS custom properties (variables) for design tokens in `src/styles/tokens.css`
- CVA for component variants and polymorphism with BEM classes, with clsx for conditional classnames
- PostCSS with plugins for import and nested CSS support
- BEM naming convention: Block (`component-name`), Element (`component-name__element`), Modifier (`component-name__element--modifier`)
- Path alias `@/` points to `src/`
- SVG icons use `.icon.svg` suffix and are processed by @svgr/webpack
- Light/dark theme system using CSS custom properties and data attributes
- Organized CSS structure in `src/styles/` with logical grouping (components/, pages/, layouts/)

#### Internationalization

- Lingui with macro support for compile-time message extraction
- Messages stored in `locales/en/` and `locales/vi/`
- Extract messages before building for production

### Development Notes

- Uses Rspack for fast builds with SWC transpilation
- TypeScript strict mode enabled with path aliases
- Development server runs on port 8080 with hot reloading
- Build outputs to `dist/` directory
- Assets are hashed for cache busting
