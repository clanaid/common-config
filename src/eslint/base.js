module.exports = {
  parser: "babel-eslint",
  extends: [
    "plugin:eslint-comments/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  plugins: ["prettier", "promise"],
  env: {
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true
  }
};
