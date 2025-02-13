const js = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const importPlugin = require('eslint-plugin-import');
const improvinPlugin = require('eslint-plugin-improvin');
const prettierConfig = require('eslint-config-prettier');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');

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
        regex: '^(_+|[a-z][a-zA-Z0-9]*|[A-Z][a-zA-Z0-9]*)$',
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
      devDependencies: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
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

  // React specific rules
  'react/react-in-jsx-scope': 'off',
  'react/prop-types': 'off',
  'react/require-default-props': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'react/jsx-wrap-multilines': 'off',
  'react/forbid-prop-types': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'react/jsx-uses-vars': 'error',

  // JSX A11y
  'jsx-a11y/alt-text': 'error',
  'jsx-a11y/anchor-has-content': 'error',
  'jsx-a11y/aria-props': 'error',
  'jsx-a11y/aria-proptypes': 'error',
  'jsx-a11y/aria-role': 'error',
  'jsx-a11y/aria-unsupported-elements': 'error',
  'jsx-a11y/click-events-have-key-events': 'error',
  'jsx-a11y/heading-has-content': 'error',
  'jsx-a11y/html-has-lang': 'error',
  'jsx-a11y/iframe-has-title': 'error',
  'jsx-a11y/img-redundant-alt': 'error',
  'jsx-a11y/interactive-supports-focus': 'error',
  'jsx-a11y/label-has-associated-control': 'error',
  'jsx-a11y/media-has-caption': 'error',
  'jsx-a11y/mouse-events-have-key-events': 'error',
  'jsx-a11y/no-access-key': 'error',
  'jsx-a11y/no-autofocus': 'error',
  'jsx-a11y/no-distracting-elements': 'error',
  'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
  'jsx-a11y/no-noninteractive-element-interactions': 'error',
  'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
  'jsx-a11y/no-redundant-roles': 'error',
  'jsx-a11y/no-static-element-interactions': 'error',
  'jsx-a11y/role-has-required-aria-props': 'error',
  'jsx-a11y/role-supports-aria-props': 'error',
  'jsx-a11y/scope': 'error',
  'jsx-a11y/tabindex-no-positive': 'error',
};

const baseConfig = {
  files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  plugins: {
    '@typescript-eslint': tsPlugin,
    import: importPlugin,
    improvin: improvinPlugin,
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
    'jsx-a11y': jsxA11yPlugin,
  },
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      sourceType: 'module',
      ecmaFeatures: { jsx: true },
    },
    globals: {
      document: true,
      window: true,
      dataLayer: true,
      google: true,
      navigator: true,
      crypto: true,
      ResizeObserver: true,
      KeyboardEvent: true,
      console: true,
      setTimeout: true,
      clearTimeout: true,
      setInterval: true,
      clearInterval: true,
      requestAnimationFrame: true,
      cancelAnimationFrame: true,
      location: true,
      history: true,
      localStorage: true,
      sessionStorage: true,
      fetch: true,
      React: true,
    },
  },
  settings: {
    'import/resolver': { typescript: true, node: true },
    react: { version: 'detect' },
  },
  rules,
};

module.exports = [js.configs.recommended, prettierConfig, baseConfig];
