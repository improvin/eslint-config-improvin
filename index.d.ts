import type { Linter } from 'eslint';

declare const baseConfig: {
  reactConfig: Linter.Config[];
  nodeConfig: Linter.Config[];
};

export const reactConfig: Linter.Config[];
export const nodeConfig: Linter.Config[];
