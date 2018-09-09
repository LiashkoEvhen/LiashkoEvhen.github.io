'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var is_touch_device = function is_touch_device() {
    return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};

exports['default'] = is_touch_device;
module.exports = exports['default'];