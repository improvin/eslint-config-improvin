# AGENTS.md

Instructions for AI agents working with this repository.

## Overview

This is a shared ESLint configuration package used across Improvin projects. It exports two configurations:

- `nodeConfig` - For Node.js/backend projects
- `reactConfig` - For React/frontend projects

## Project Structure

```
eslint-config-improvin/
├── index.cjs          # CommonJS entry point
├── index.mjs          # ESM entry point
├── index.d.ts         # TypeScript declarations
├── src/
│   ├── node.config.cjs    # Node.js ESLint configuration
│   ├── react.config.cjs   # React ESLint configuration
│   ├── plugins/
│   │   └── logger-rules.cjs   # Custom plugin for logger rules
│   └── rules/
│       └── logger-arg-limit.cjs  # Custom rule: max 2 args for logger
├── .prettierrc.json   # Prettier configuration
└── package.json
```

## Key Conventions

### Code Style

- Use arrow functions instead of function declarations
- Use `type` instead of `interface` for TypeScript type definitions
- No inline exports - export separately at the end of files
- Max line length: 80 characters
- Max function parameters: 3
- Prefer single quotes, trailing commas

### Custom Rules

The package includes a custom ESLint rule `logger-rules/logger-arg-limit` that enforces logger methods (`error`, `warn`, `info`, `debug`, `log`) have at most 2 arguments.

## Development

### Install dependencies

```bash
yarn install
```

### Verify the package works

```bash
node -e "require('./index.cjs'); console.log('CJS works')"
node -e "import('./index.mjs').then(() => console.log('ESM works'))"
```

### Note on linting

This package does not have its own ESLint config file since it IS the ESLint config. The `yarn lint` script exists but will fail because there's no `eslint.config.js` in this repo.

## Updating Dependencies

This package pins its dependencies (ESLint plugins, TypeScript, Prettier) as regular dependencies so consuming projects get consistent linting behavior. When updating dependencies:

1. Update the version in `package.json`
2. Run `yarn install`
3. Verify imports still work (see commands above)
4. Commit and publish

Dependabot PRs are handled automatically - verify the package still imports correctly before merging.

## Publishing

This package is installed directly from GitHub:

```bash
yarn add --dev https://github.com/improvin/eslint-config-improvin.git
```

To release a new version:

1. Update the version in `package.json`
2. Commit and push to `main`
3. Consuming projects can update by running the install command again
