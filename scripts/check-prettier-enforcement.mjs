import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const eslintBin = path.join(rootDir, 'node_modules', '.bin', 'eslint');

const checks = [
  {
    name: 'nodeConfig',
    config: 'tests/node/eslint.config.mjs',
    file: 'tests/node/bad.ts',
  },
  {
    name: 'reactConfig',
    config: 'tests/react/eslint.config.mjs',
    file: 'tests/react/bad.tsx',
  },
];

for (const check of checks) {
  const result = spawnSync(eslintBin, ['--config', check.config, check.file], {
    cwd: rootDir,
    encoding: 'utf8',
  });

  const output = `${result.stdout || ''}${result.stderr || ''}`;

  if (result.status === 0) {
    throw new Error(`${check.name} lint unexpectedly passed for ${check.file}`);
  }

  if (!output.includes('prettier/prettier')) {
    throw new Error(
      `${check.name} did not report prettier/prettier for ${check.file}\n${output}`,
    );
  }

  console.log(`✓ ${check.name} rejects Prettier drift`);
}
