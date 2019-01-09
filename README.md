[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c906cffa9e92486cafc7a5f72187a79d)](https://www.codacy.com/app/swzyocowboy/manual-sort?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=iTonyYo/manual-sort&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/iTonyYo/manual-sort.svg?branch=master)](https://travis-ci.org/iTonyYo/manual-sort) [![Coverage Status](https://coveralls.io/repos/github/iTonyYo/manual-sort/badge.svg?branch=master)](https://coveralls.io/github/iTonyYo/manual-sort?branch=master) [![dependencies Status](https://david-dm.org/iTonyYo/manual-sort/status.svg)](https://david-dm.org/iTonyYo/manual-sort)

# `@oopsunome/manual-sort`

手动排序数组，如：

```javascript
[
  1,
  [1, 2, 3],
  'loaded',
  null,
]
```

将上面数组中 `null` 放置在 `[1, 2, 3]` 的位置，即：将第 4 位移动到第 2 位 *(注意，并非对调位置)*，得到下面新的数组：

```javascript
[
  1,
  null,
  [1, 2, 3],
  'loaded',
]
```

[`@oopsunome/manual-sort`][@oopsunome/manual-sort] **支持在浏览器以及 Node.js 环境下使用**。Node.js 方面，持续且仅支持最新 LTS 版本的。

## 目录

- [安装](#安装)
- [使用](#使用)
    - [manualSort(options)](#manualsortoptions)
    - [manualSortSync(options)](#manualsortsyncoptions)
- [参与开发](#参与开发)
- [贡献指南](#贡献指南)
- [证书](#证书)
- [待办](#待办)

## 安装

```shell
# 使用 NPM
$ npm i @oopsunome/manual-sort lodash

# 使用 Yarn
$ yarn add @oopsunome/manual-sort lodash

# 使用 PNPM
$ pnpm install @oopsunome/manual-sort lodash
```

## 使用

#### manualSort(options)

- `options` {Object}
  - `data` {Array} 待操作的数据
  - `fromIndex` {Number} 开始位置
  - `toIndex` {Number} 目标位置
- 返回: {Promise} 被排序后的数据

```javascript
import { manualSort } from 'manual-sort';

(async function() {
  try {
    const sorted = await manualSort({
      data: [ 1, [ 1, 2, 3 ], 'loaded', null ],
      fromIndex: 2,
      toIndex: 1,
    });

    console.table(sorted); // [ 1, 'loaded', [ 1, 2, 3 ], null ]
  } catch(err) {
    throw err;
  }
})();
```

#### manualSortSync(options)

- `options` {Object}
  - `data` {Array} 待操作的数据
  - `fromIndex` {Number} 开始位置
  - `toIndex` {Number} 目标位置
- 返回: {Array} 被排序后的数据

```javascript
import { manualSortSync } from 'manual-sort';

const rslt = manualSortSync({
  data: [ 1, [ 1, 2, 3 ], 'loaded', null ],
  fromIndex: 2,
  toIndex: 1,
});

console.table(rslt); // [ 1, 'loaded', [ 1, 2, 3 ], null ]
```

## 参与开发

**准备开发环境**

详细参见 [SETUP.md][SETUP.md]。

**安装依赖**

[`@oopsunome/manual-sort`][@oopsunome/manual-sort] 使用 [`Yarn`](https://yarnpkg.com/zh-Hans/) 包管理器，执行 `yarn install` 安装依赖。

**开始开发**

```shell
yarn start
```

**生产构建**

```shell
yarn build
```

**测试**

```shell
yarn test
```

## 贡献指南

仔细查阅 [CONTRIBUTING.md][贡献指南] 以了解详情。

## 证书

[`@oopsunome/manual-sort`][@oopsunome/manual-sort] 获得了 MIT 许可，仔细查阅 [LICENSE.md][证书] 以了解详情。

## 待办

- [X] 支持 `解构` 或 `直接引用` 2 种暴露接口的方式；
- [X] 提供同步、异步 2 种编程方式，异步编程采用 `Promise`；
- [X] 支持构建 `CommonJS`, `AMD`, `ESM`, `UMD` 模式的模块；
- [X] 不将 `lodash` 等库打包；
- [X] 功能测试；
- [X] 捆绑 [Git 倒钩][Git倒钩]；
- [X] ESlint 检测；
- [X] 自动化生成所有依赖的开源证书；
- [X] 自动化发布；
- [X] 使用 [David DM][DavidDM] 实现 `依赖是否最新` 检测；
- [X] 使用 [Travis CI][TravisCI] 实现持续集成；
- [X] 使用 [Coveralls][Coveralls] 可视化测试用例覆盖率；
- [X] 使用 [Codacy][Codacy] 实现代码质量检测；
- [ ] 在什么场景下使用 [`@oopsunome/manual-sort`][@oopsunome/manual-sort]?
- [ ] 编写 [开发环境指南][SETUP.md]；
- [ ] 文档：在哪里可以获得更多帮助？
- [ ] 文档：设计思想；
- [ ] 文档：维护策略；
- [ ] 文档：[编码风格指南][编码风格指南]；
- [ ] 编写 [发布流程指南][发布流程指南]；
- [ ] 编写 [Git 指南][Git指南]；
- [ ] 编写 [命名指南][命名指南]；
- [ ] 编写 [版本指南][版本指南]；
- [X] 更新日志；
- [ ] 谁在使用 [`@oopsunome/manual-sort`][@oopsunome/manual-sort]?
- [ ] 性能测试；



[编码风格指南]: #
[版本指南]: #
[命名指南]: #
[Git指南]: #
[发布流程指南]: #
[Git倒钩]: https://github.com/typicode/husky
[DavidDM]: https://david-dm.org/
[TravisCI]: https://travis-ci.org/
[Coveralls]: https://coveralls.io/
[Codacy]: https://www.codacy.com/
[贡献指南]: https://github.com/iTonyYo/manual-sort/blob/master/CONTRIBUTING.md
[证书]: https://github.com/iTonyYo/manual-sort/blob/master/LICENSE.md
[@oopsunome/manual-sort]: https://github.com/iTonyYo/manual-sort
[SETUP.md]: #
