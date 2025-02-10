export default {
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  plugins: ['improvin'],
  rules: {
    // Disable

    // Eslint
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-continue': 'off',
    'no-bitwise': 'off',
    'no-cond-assign': 'off',
    'no-await-in-loop': 'off',
    'no-case-declarations': 'off',

    // React
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    // Import
    'import/prefer-default-export': 'off',

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

    // Customized errors
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
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
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: 'debug', ignoreRestSiblings: true },
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
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['parent', 'internal', 'sibling', 'index', 'unknown'],
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

    // Improvin
    'improvin/sql-matching-double-quotes': 'warn',

    // Allow unused variables if they have a leading underscore.
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
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

    '@typescript-eslint/prefer-function-type': 1,
    'func-names': [1, 'never'],

    // Prefers arrow functions over function declarations in callbacks,
    // i.e. `onClick={() => {}}` instead of `onClick={function() {}}`.
    // Disallows named functions if they are not bound to `this`.
    'prefer-arrow-callback': [
      'warn',
      {
        allowNamedFunctions: false,
        allowUnboundThis: false,
      },
    ],

    'no-restricted-syntax': [
      'warn',
      // Disallow function declarations; prefer 'const' with arrow functions;
      // i.e. `() => {}` instead of `function() {}`.
      {
        selector: 'FunctionDeclaration',
        message:
          'Use `const` with arrow functions instead of `function` declarations.',
      },
      // Disallow inline exports; prefer exporting at the end of the file.
      // i.e. disallow `export const foo = () => {}` in the middle of the file,
      // Prefer `const foo = () => {}; export { foo };`
      // or `const foo = () => {}; export default foo;` at the end of the file.
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

    // Prefer `type` over `interface`, except for defining types for classes
    // `type` is more expressive because it can be used for primitives, unions, intersections, etc.,
    // while `interface` can only be used for object types and is less flexible for code that rarely uses classes.
    '@typescript-eslint/consistent-type-definitions': [
      1,
      'type', // Enforce using `type` over `interface`
    ],

    '@typescript-eslint/no-empty-object-type': [
      2,
      {
        allowSingleExtends: true, // Allow types that extend other types
      },
    ],
  },
};
