import type { Linter } from 'eslint';

declare const baseConfig: {
  commonConfig: Linter.FlatConfig[];
  reactConfig: Linter.FlatConfig[];
  nodeConfig: Linter.FlatConfig[];
};

export const commonConfig: Linter.FlatConfig[];
export const reactConfig: Linter.FlatConfig[];
export const nodeConfig: Linter.FlatConfig[];

export default baseConfig;
