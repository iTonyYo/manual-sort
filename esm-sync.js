"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = require("lodash");

var presetIndex = function presetIndex(data) {
  var temp = (0, _lodash.times)((0, _lodash.size)(data), _lodash.stubObject);
  (0, _lodash.forEach)(temp, function (value, index) {
    (0, _lodash.merge)(value, {
      idx: index,
      original: data[index]
    });
  });
  return temp;
};

var removeIndex = function removeIndex(data) {
  var temp = (0, _lodash.stubArray)();
  (0, _lodash.forEach)(data, function (value) {
    temp.push((0, _lodash.get)(value, 'original'));
  });
  return temp;
};
/**
 * TODO: 图示其中算法
 *
 * @param {Array} data - 待操作的数据
 * @param {Object} fromIndex - 开始位置
 * @param {Object} toIndex - 目标位置
 */


var manualSortSync = function manualSortSync(_ref) {
  var data = _ref.data,
      fromIndex = _ref.fromIndex,
      toIndex = _ref.toIndex;

  if (!(0, _lodash.isArray)(data) || (0, _lodash.isEmpty)(data)) {
    throw new Error('有效的数据是必须的');
  }

  var temp = presetIndex(data);
  var $from = temp[fromIndex];
  var $to = temp[toIndex];

  if ((0, _lodash.isEmpty)($from) || (0, _lodash.isEmpty)($to)) {
    throw new Error('`from` 和 `to` 两者或之一无效');
  }

  var sortedTemp;

  if ($from.idx < $to.idx) {
    var interval = (0, _lodash.slice)(temp, $from.idx, $to.idx + 1);
    var beforeInterval = (0, _lodash.slice)(temp, 0, $from.idx);
    var afterInterval = (0, _lodash.slice)(temp, $to.idx + 1);
    var intervalWitoutFrom = (0, _lodash.slice)(interval, 1);
    sortedTemp = (0, _lodash.concat)(beforeInterval, intervalWitoutFrom, $from, afterInterval);
  }

  if ($from.idx > $to.idx) {
    var _interval = (0, _lodash.slice)(temp, $to.idx, $from.idx + 1);

    var _beforeInterval = (0, _lodash.slice)(temp, 0, $to.idx);

    var _afterInterval = (0, _lodash.slice)(temp, $from.idx + 1);

    var _intervalWitoutFrom = (0, _lodash.slice)(_interval, 0, _interval.length - 1);

    sortedTemp = (0, _lodash.concat)(_beforeInterval, $from, _intervalWitoutFrom, _afterInterval);
  }

  return removeIndex(sortedTemp);
};

var _default = manualSortSync;
exports.default = _default;
module.exports = exports.default;
