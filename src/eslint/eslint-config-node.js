import globalRule from "./rules/global";
import base from "./base";

module.exports = {
  parser: base.parser,
  extends: ["airbnb-base", "airbnb-typescript/base", ...base.extends],
  plugins: base.plugins,
  env: base.env,
  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true
      }
    }
  ],
  rules: {
    ...globalRule
  }
};
