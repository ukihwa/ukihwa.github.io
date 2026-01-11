/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 80,
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',

  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn', 'cva'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
