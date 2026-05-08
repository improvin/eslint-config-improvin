# eslint-config-improvin

## Welcome to Improvin's eslint config

## Install

```bash
yarn add --dev eslint-config-improvin eslint
```

## Usage

### Node projects

```js
import { nodeConfig } from 'eslint-config-improvin';

export default [...nodeConfig];
```

### React projects

```js
import { reactConfig } from 'eslint-config-improvin';

export default [...reactConfig];
```

## Prettier enforcement

Both exported configs include `eslint-plugin-prettier/recommended`.
That means `yarn lint` fails with `prettier/prettier` errors whenever code
has drifted from Prettier formatting.

Use ESLint auto-fix to apply formatting fixes:

```bash
yarn eslint . --fix
```

## Local verification

```bash
yarn lint
yarn test:prettier-enforcement
```
