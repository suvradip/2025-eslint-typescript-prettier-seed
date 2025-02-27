import tseslint from "@typescript-eslint/eslint-plugin"; /** Provides TypeScript-specific linting rules. */
import tsparser from "@typescript-eslint/parser"; /** Parses TypeScript code so ESLint can understand it. */
import prettierPlugin from "eslint-plugin-prettier"; /** Runs Prettier as an ESLint rule. */
import prettierConfig from "eslint-config-prettier"; /** Disables ESLint rules that conflict with Prettier. */

export default [
  {
    files: [
      "**/*.ts",
    ] /** Specifies that this configuration applies to all TypeScript files */,

    languageOptions: {
      parser: tsparser /** Uses the TypeScript parser. */,
      sourceType:
        "module" /** Specifies that the code is in ECMAScript modules. */,
    },

    plugins: {
      "@typescript-eslint":
        tseslint /** Adds TypeScript-specific linting rules. */,
      prettier: prettierPlugin /** Integrates Prettier for code formatting. */,
    },

    rules: {
      /** Merges recommended rules from @typescript-eslint and Prettier. */
      ...tseslint.configs.recommended.rules,
      ...prettierConfig.rules,
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "prettier/prettier": "error",
    },
  },
];
