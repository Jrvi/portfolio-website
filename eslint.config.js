import globals from "globals";


export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
      },
      ecmaVersion: "latest",
    },
  },
  {
    ignores: ["node_modules", ".eslintrc.cjs", "vite.config.js", "eslint.config.js", "*.js"]
  },
]