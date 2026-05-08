import { nodeConfig } from './index.mjs';

export default [
  {
    ignores: ['tests/**'],
  },
  {
    files: ['scripts/**/*.mjs', 'eslint.config.mjs'],
    languageOptions: {
      globals: {
        console: true,
      },
    },
  },
  ...nodeConfig,
];
