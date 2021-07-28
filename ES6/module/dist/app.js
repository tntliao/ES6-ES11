'use strict';

var _m = require('./m1.js');

var m1 = _interopRequireWildcard(_m);

var _m2 = require('./m2.js');

var _m3 = require('./m3.js');

var _m4 = _interopRequireDefault(_m3);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

(0, _jquery2.default)('body').css('background', 'pink');

// console.log(m1);
// change();
// console.log(m3.name);