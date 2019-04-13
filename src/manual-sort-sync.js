import slice from 'lodash/slice';
import concat from 'lodash/concat';
import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import forEach from 'lodash/forEach';
import merge from 'lodash/merge';
import size from 'lodash/size';
import times from 'lodash/times';
import stubObject from 'lodash/stubObject';
import stubArray from 'lodash/stubArray';
import get from 'lodash/get';

const presetIndex = (data) => {
  const temp = times(size(data), stubObject);

  forEach(temp, (value, index) => {
    merge(value, {
      idx: index,
      original: data[index],
    });
  });

  return temp;
};

const removeIndex = (data) => {
  const temp = stubArray();

  forEach(data, (value) => {
    temp.push(get(value, 'original'));
  });

  return temp;
};

/**
 * TODO: 图示算法
 *
 * @param {Array} data - 待操作的数据
 * @param {Number} fromIndex - 开始位置
 * @param {Number} toIndex - 目标位置
 */
const manualSortSync = ({
  data,
  fromIndex,
  toIndex,
}) => {
  if (!isArray(data) || isEmpty(data)) {
    throw new Error('有效的数据是必须的');
  }

  const temp = presetIndex(data);

  const $from = temp[fromIndex];
  const $to = temp[toIndex];

  if (isEmpty($from) || isEmpty($to)) {
    throw new Error('`from` 和 `to` 两者或之一无效');
  }

  let sortedTemp;

  if ($from.idx < $to.idx) {
    const interval = slice(temp, $from.idx, $to.idx + 1);
    const beforeInterval = slice(temp, 0, $from.idx);
    const afterInterval = slice(temp, $to.idx + 1);
    const intervalWitoutFrom = slice(interval, 1);

    sortedTemp = concat(
      beforeInterval,
      intervalWitoutFrom,
      $from,
      afterInterval,
    );
  }

  if ($from.idx > $to.idx) {
    const interval = slice(temp, $to.idx, $from.idx + 1);
    const beforeInterval = slice(temp, 0, $to.idx);
    const afterInterval = slice(temp, $from.idx + 1);
    const intervalWitoutFrom = slice(interval, 0, interval.length - 1);

    sortedTemp = concat(
      beforeInterval,
      $from,
      intervalWitoutFrom,
      afterInterval,
    );
  }

  return removeIndex(sortedTemp);
};

export default manualSortSync;
