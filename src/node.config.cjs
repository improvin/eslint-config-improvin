const js = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const importPlugin = require('eslint-plugin-import');
const improvinPlugin = require('eslint-plugin-improvin');
const prettierConfig = require('eslint-config-prettier');

const rules = {
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
  ],
  'no-underscore-dangle': 'off',
  'no-plusplus': 'off',
  'no-continue': 'off',
  'no-bitwise': 'off',
  'no-cond-assign': 'off',
  'no-await-in-loop': 'off',
  'no-case-declarations': 'off',
  indent: 'off',
  quotes: 'off',

  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
  '@typescript-eslint/no-empty-object-type': 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      format: null,
      custom: {
        regex: '^(_+|[a-z][a-zA-Z0-9]*|[A-Z][a-zA-Z0-9]*|[A-Z][A-Z0-9_]+)$',
        match: true
      },
    },
    {
      selector: 'variable',
      modifiers: ['unused'],
      format: null,
      custom: {
        regex: '^(_+|[a-z][a-zA-Z0-9]*|[A-Z][a-zA-Z0-9]*|[A-Z][A-Z0-9_]+)$',
        match: true
      },
    },
    {
      selector: 'parameter',
      format: null,
      custom: {
        regex: '^(_+$|_+[a-z][a-zA-Z0-9]*|[a-z][a-zA-Z0-9]*|[A-Z][a-zA-Z0-9]*)$',
        match: true
      },
    },
    {
      selector: 'memberLike',
      modifiers: ['private'],
      format: null,
      custom: {
        regex: '^(_+|[a-z][a-zA-Z0-9]*)$',
        match: true
      },
    },
  ],
  '@typescript-eslint/prefer-function-type': 'warn',

  'import/prefer-default-export': 'off',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: ['**/*.test.js', '**/*.test.ts'],
    },
  ],
  'import/order': [
    'error',
    {
      groups: [
        ['builtin', 'external'],
        ['parent', 'internal', 'sibling', 'index'],
      ],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],

  'max-params': ['error', 3],
  'max-len': [
    'warn',
    {
      code: 80,
      comments: 80,
      tabWidth: 2,
      ignoreComments: false,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],
  'func-names': ['warn', 'never'],
  'prefer-arrow-callback': [
    'warn',
    { allowNamedFunctions: false, allowUnboundThis: false },
  ],
  'no-restricted-syntax': [
    'warn',
    {
      selector: 'FunctionDeclaration',
      message:
        'Use `const` with arrow functions instead of `function` declarations.',
    },
    {
      selector:
        'ExportNamedDeclaration[declaration.type="VariableDeclaration"]',
      message:
        'Inline exports are not allowed. Export separately at the end of the file.',
    },
    {
      selector:
        'ExportNamedDeclaration[declaration.type="FunctionDeclaration"]',
      message:
        'Inline exports are not allowed. Export separately at the end of the file.',
    },
    {
      selector: 'ExportNamedDeclaration[declaration.type="ClassDeclaration"]',
      message:
        'Inline exports are not allowed. Export separately at the end of the file.',
    },
  ],

  // Node specific rules
  'no-process-exit': 'error',
  'no-console': 'off',
};

const baseConfig = {
  files: ['**/*.js', '**/*.ts'],
  plugins: {
    '@typescript-eslint': tsPlugin,
    import: importPlugin,
    improvin: improvinPlugin,
  },
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      sourceType: 'module',
    },
    globals: {
      process: true,
      console: true,
      module: true,
      require: true,
      __dirname: true,
      __filename: true,
      Buffer: true,
      setTimeout: true,
      clearTimeout: true,
      setInterval: true,
      clearInterval: true,
      setImmediate: true,
      clearImmediate: true,
    },
  },
  settings: {
    'import/resolver': { typescript: true, node: true },
  },
  rules,
};

module.exports = [js.configs.recommended, prettierConfig, baseConfig];
