"use strict";

module.exports = {
  "react/jsx-wrap-multilines": 0,
  "react/prop-types": 0,
  "react/forbid-prop-types": 0,
  "react/jsx-one-expression-per-line": 0,
  "react/sort-comp": 0,
  "react-hooks/rules-of-hooks": "warn",
  // Checks rules of Hooks
  "react/no-array-index-key": "warn",
  // issue https://github.com/facebook/react/issues/15204
  "react-hooks/exhaustive-deps": "off",
  // Checks effect dependencies
  // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
  "react/destructuring-assignment": "off",
  "react/jsx-filename-extension": "off",
  "jsx-a11y/no-noninteractive-element-interactions": 0,
  "jsx-a11y/click-events-have-key-events": 0,
  "jsx-a11y/no-static-element-interactions": 0,
  "jsx-a11y/anchor-is-valid": 0,
  "import/no-extraneous-dependencies": [2, {
    optionalDependencies: true,
    devDependencies: ["**/tests/**.{ts,js,jsx,tsx}", "**/_test_/**.{ts,js,jsx,tsx}", "/mock/**/**.{ts,js,jsx,tsx}", "**/**.test.{ts,js,jsx,tsx}", "**/_mock.{ts,js,jsx,tsx}", "**/example/**.{ts,js,jsx,tsx}", "**/examples/**.{ts,js,jsx,tsx}"]
  }]
};