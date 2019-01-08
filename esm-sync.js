"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slice = _interopRequireDefault(require("lodash/slice"));

var _concat = _interopRequireDefault(require("lodash/concat"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _forEach = _interopRequireDefault(require("lodash/forEach"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _size = _interopRequireDefault(require("lodash/size"));

var _times = _interopRequireDefault(require("lodash/times"));

var _stubObject = _interopRequireDefault(require("lodash/stubObject"));

var _stubArray = _interopRequireDefault(require("lodash/stubArray"));

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var presetIndex = function presetIndex(data) {
  var temp = (0, _times.default)((0, _size.default)(data), _stubObject.default);
  (0, _forEach.default)(temp, function (value, index) {
    (0, _merge.default)(value, {
      idx: index,
      original: data[index]
    });
  });
  return temp;
};

var removeIndex = function removeIndex(data) {
  var temp = (0, _stubArray.default)();
  (0, _forEach.default)(data, function (value) {
    temp.push((0, _get.default)(value, 'original'));
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


var manualSortSync = function manualSortSync(_ref) {
  var data = _ref.data,
      fromIndex = _ref.fromIndex,
      toIndex = _ref.toIndex;

  if (!(0, _isArray.default)(data) || (0, _isEmpty.default)(data)) {
    throw new Error('有效的数据是必须的');
  }

  var temp = presetIndex(data);
  var $from = temp[fromIndex];
  var $to = temp[toIndex];

  if ((0, _isEmpty.default)($from) || (0, _isEmpty.default)($to)) {
    throw new Error('`from` 和 `to` 两者或之一无效');
  }

  var sortedTemp;

  if ($from.idx < $to.idx) {
    var interval = (0, _slice.default)(temp, $from.idx, $to.idx + 1);
    var beforeInterval = (0, _slice.default)(temp, 0, $from.idx);
    var afterInterval = (0, _slice.default)(temp, $to.idx + 1);
    var intervalWitoutFrom = (0, _slice.default)(interval, 1);
    sortedTemp = (0, _concat.default)(beforeInterval, intervalWitoutFrom, $from, afterInterval);
  }

  if ($from.idx > $to.idx) {
    var _interval = (0, _slice.default)(temp, $to.idx, $from.idx + 1);

    var _beforeInterval = (0, _slice.default)(temp, 0, $to.idx);

    var _afterInterval = (0, _slice.default)(temp, $from.idx + 1);

    var _intervalWitoutFrom = (0, _slice.default)(_interval, 0, _interval.length - 1);

    sortedTemp = (0, _concat.default)(_beforeInterval, $from, _intervalWitoutFrom, _afterInterval);
  }

  return removeIndex(sortedTemp);
};

var _default = manualSortSync;
exports.default = _default;
module.exports = exports.default;
