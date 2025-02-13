import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

const nodeConfig = require('./src/node.config.cjs');
const reactConfig = require('./src/react.config.cjs');

export { reactConfig, nodeConfig };
