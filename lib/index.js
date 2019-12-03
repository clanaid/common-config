"use strict";

const prettier = require("./prettier-config");

const nodeEslint = require("./eslint/eslint-config-node");

const reactEslint = require("./eslint/eslint-config-react");

module.exports = {
  prettier,
  nodeEslint,
  reactEslint
};