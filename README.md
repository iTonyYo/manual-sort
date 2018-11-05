[![dependencies Status](https://david-dm.org/iTonyYo/manual-sort/status.svg)](https://david-dm.org/iTonyYo/manual-sort)

# `manualSort()`

手动排序数组，如：

```javascript
[
  1,
  [1, 2, 3],
  'loaded',
  null,
]
```

将上面数组中 `null` 放置在 `[1, 2, 3]` 的位置，即：将第 4 位移动到第 2 位，得到如下新的数组：

```javascript
[
  1,
  null,
  [1, 2, 3],
  'loaded',
]
```

> 注：并非对调位置。

## 目录

- [manualSort()](#manualsort)

- [manualSortSync()](#manualsortsync)

- [参与开发](#%E5%8F%82%E4%B8%8E%E5%BC%80%E5%8F%91)

- [待办](#%E5%BE%85%E5%8A%9E)

## manualSort()

```javascript
const { manualSort } = require('manual-sort');
// const manualSort = require('manual-sort/esm');

(async function() {
  const sorted = await manualSort({
    data: data2, // [ 1, [ 1, 2, 3 ], 'loaded', null ]
    fromIndex: 2,
    toIndex: 1,
  });

  console.log(sorted);
  // [ 1, 'loaded', [ 1, 2, 3 ], null ]
})();
```

## manualSortSync()

```javascript
const { manualSortSync } = require('manual-sort');
// const manualSortSync = require('manual-sort/esm-sync');

const rslt = manualSortSync({
  data: data2, // [ 1, [ 1, 2, 3 ], 'loaded', null ]
  fromIndex: 2,
  toIndex: 1,
});

console.log(rslt);
// [ 1, 'loaded', [ 1, 2, 3 ], null ]
```

## 参与开发

**准备开发环境**

详细参见 [SETUP.md]()。

**安装依赖**

[`manual-sort`]() 使用 [`Yarn`](https://yarnpkg.com/zh-Hans/) 包管理器，执行 `yarn install` 安装依赖。

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

## 待办

- [ ] 性能测试；

- [ ] 自动化发布；

- [ ] `reconstruct` 指令

- [ ] 使用 [Travis CI](https://travis-ci.org/) 实现持续集成；

- [ ] 使用 [Coveralls](https://coveralls.io/) 可视化测试用例覆盖率；

- [ ] 使用 [Codacy](https://www.codacy.com/) 实现代码质量检测；

- [ ] 编写 [`SETUP.md`]()；