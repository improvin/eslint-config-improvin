declare module '@eslint/eslintrc' {
  export class FlatCompat {
    constructor(options: { baseDirectory: string });
    extends(...configs: string[]): any[];
  }
}

declare module '@eslint/js' {
  const js: {
    configs: {
      recommended: any;
    };
  };
  export default js;
}

declare module 'eslint-plugin-improvin' {
  const plugin: any;
  export default plugin;
} 