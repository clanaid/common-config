## 个人开发工具配置集合

包含 prettier、eslint、stylelint 的个人配置集合

## Use

### install

```bash
yarn add https://github.com/clanaid/common-config/tree/master/packages/eslint-config-node
```

#### for node project

in `.eslintrc.js`

```js
module.exports = {
    extends:[@clanaid/common-config/lib/eslint/eslint-config-node]
}
```

#### for react project

in `.eslintrc.js`

```js
module.exports = {
    extends:[@clanaid/common-config/lib/eslint/eslint-config-react]
}
```

#### prettier

in `.prettierrc.js`

```js
const { prettier } = require("@clanaid/common-config");

module.exports = {
  ...prettier
};
```
