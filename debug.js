require('@babel/register')();

const chalk = require('chalk');
const { data2 } = require('./data');
const manualSortSync = require('./src/manual-sort-sync');
const manualSort = require('./src/manual-sort');

/**
 * manualSort()
 */
console.log(chalk `{grey {bold manualSort()}, 移动第 3 位到第 2 位:}`);
console.log(data2);
console.log(`\n`);

manualSort({
  data: data2,
  fromIndex: 2,
  toIndex: 1,
})
.then((rslt) => {
  console.log(chalk `{grey {bold manualSort()}, 结果:}`);
  console.log(rslt);
  console.log(`\n`);
})
.catch((err) => {
  throw err;
});

/**
 * manualSortSync()
 */
console.log(chalk `{grey {bold manualSortSync()}, 移动第 3 位到第 2 位:}`);
console.log(data2);
console.log(`\n`);

const rslt = manualSortSync({
  data: data2,
  fromIndex: 2,
  toIndex: 1,
});

console.log(chalk `{grey {bold manualSortSync()}, 结果:}`);
console.log(rslt);
console.log(`\n`);
