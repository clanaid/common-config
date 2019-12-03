import globalRule from "./rules/global";
import reactRule from "./rules/react";
import base from "./base";

module.exports = {
  parser: base.parser,
  extends: ["airbnb", "airbnb/hooks", "airbnb-typescript", ...base.extends],
  plugins: base.plugins,
  env: {
    browser: true,
    ...base.env
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        },
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true
      },
      plugins: ["@typescript-eslint"]
    }
  ],
  rules: {
    ...globalRule,
    ...reactRule
  }
};
