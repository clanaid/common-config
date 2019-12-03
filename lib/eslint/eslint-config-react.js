"use strict";

var _global = _interopRequireDefault(require("./rules/global"));

var _react = _interopRequireDefault(require("./rules/react"));

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = {
  parser: _base.default.parser,
  extends: ["airbnb", "airbnb/hooks", "airbnb-typescript", ..._base.default.extends],
  plugins: _base.default.plugins,
  env: _objectSpread({
    browser: true
  }, _base.default.env),
  overrides: [{
    files: ["**/*.ts?(x)"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      // typescript-eslint specific options
      warnOnUnsupportedTypeScriptVersion: true
    }
  }],
  rules: _objectSpread({}, _global.default, {}, _react.default)
};