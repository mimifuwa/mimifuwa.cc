// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    ignores: ["node_modules/", "dist/", "build/", ".next/", "**/*.min.js", "*.yml"],
  },
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      "sort-imports": ["error", { ignoreCase: true, ignoreDeclarationSort: true }],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", ["sibling", "parent"], "object"],
          pathGroups: [
            {
              pattern: "react",
              group: "builtin",
              position: "before",
            },
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "react/display-name": ["error", { ignoreTranspilerName: false }],
    },
  },
];

export default eslintConfig;
