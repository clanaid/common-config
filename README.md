## 个人开发工具配置集合

包含 prettier、eslint、stylelint 的个人配置集合

## Use

### for node project

#### install

```bash
yarn add https://github.com/clanaid/common-config/tree/master/packages/eslint-config-node
```

in `.eslintrc.js`

```js
module.exports = {
    extends:[@clanaid/node]
}
```

### prettier

#### install

```bash
yarn add https://github.com/clanaid/common-config/tree/master/packages/prettier-config
```

in `.prettierrc.js`

```js
const pconfig = require("@clanaid/prettier-config");

module.exports = {
  ...pconfig
};
```
