import globalRule from "./rules/global";

module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  plugins: ["prettier"],
  env: {
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true
  },
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
