import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const baseConfig = require('./base-config.cjs');

const { commonConfig, reactConfig, nodeConfig } = baseConfig;

export { commonConfig, reactConfig, nodeConfig };
export default baseConfig;
