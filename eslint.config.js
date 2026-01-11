import pluginJs from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import pluginTs from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,tsx,astro}'] },
  { ignores: ['.astro/**/*', 'dist/**/*', 'node_modules/**/*', '**/*.d.ts'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginTs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  // @see https://ota-meshi.github.io/eslint-plugin-astro/rules/#accessibility-rules
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  // @see https://react.dev/reference/eslint-plugin-react-hooks
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    rules: {
      'no-undef': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true },
      ],
    },
  },
  // @see https://github.com/lydell/eslint-plugin-simple-import-sort
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  // @see https://github.com/sweepline/eslint-plugin-unused-imports
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];
