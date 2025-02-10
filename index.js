import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import improvinPlugin from 'eslint-plugin-improvin';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      import: importPlugin,
      improvin: improvinPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: true,
        node: true,
      },
    },
    rules: {
      // Disable
      'no-underscore-dangle': 'off',
      'no-plusplus': 'off',
      'no-continue': 'off',
      'no-bitwise': 'off',
      'no-cond-assign': 'off',
      'no-await-in-loop': 'off',
      'no-case-declarations': 'off',
      'import/prefer-default-export': 'off',

      // React
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

      // TypeScript
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          modifiers: ['unused'],
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
      ],
      '@typescript-eslint/prefer-function-type': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],

      // Import
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            'config/*.js',
            '**/*.spec.*',
            '**/webpack.*.js',
            '**/app/index.jsx',
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
          pathGroups: [
            {
              pattern: 'react*',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      // Prettier
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          printWidth: 80,
          arrowParens: 'avoid',
          trailingComma: 'all',
        },
        { usePrettierrc: false },
      ],

      // General
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
        {
          allowNamedFunctions: false,
          allowUnboundThis: false,
        },
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
          selector:
            'ExportNamedDeclaration[declaration.type="ClassDeclaration"]',
          message:
            'Inline exports are not allowed. Export separately at the end of the file.',
        },
      ],

      // Improvin
      'improvin/sql-matching-double-quotes': 'warn',
    },
  },
];
