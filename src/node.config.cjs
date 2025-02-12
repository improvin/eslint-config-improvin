const js = require('@eslint/js');
const prettierConfig = require('eslint-config-prettier');
const commonConfig = require('./common.config.cjs');

const nodeConfig = {
  files: ['**/*.js', '**/*.ts'],
  languageOptions: {
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
  rules: {
    'no-process-exit': 'error',
    'no-console': 'off',
  },
};

module.exports = [...commonConfig.configs.recommended, nodeConfig];
