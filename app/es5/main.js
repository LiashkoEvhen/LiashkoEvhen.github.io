'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*[1] detected device*/

var _detectedDevice = require('./detectedDevice');

var _detectedDevice2 = _interopRequireDefault(_detectedDevice);

/*[1] detected device*/

/*[2] safariDetected*/

var _getMobileOperatingSystem = require('./getMobileOperatingSystem');

var _getMobileOperatingSystem2 = _interopRequireDefault(_getMobileOperatingSystem);

/*[2] safariDetected*/

/*[3] inputFocus*/

var _inputFocus = require('./inputFocus');

var _inputFocus2 = _interopRequireDefault(_inputFocus);

/*[3] inputFocus*/

/*[4] createBy*/

var _createBy = require('./createBy');

var _createBy2 = _interopRequireDefault(_createBy);

/*[4] createBy*/

/*[5] modal*/

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

//modal subscribe

/*[5] modal*/

/* [7] menuBtn*/

var _menuBtn = require('./menuBtn');

var _menuBtn2 = _interopRequireDefault(_menuBtn);

/* [7] menuBtn*/

/*[8] ie*/

var _ie = require('./ie');

var _ie2 = _interopRequireDefault(_ie);

/*[8] header settings*/

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

/*[9] catalog settings*/

var _catalog = require('./catalog');

var _catalog2 = _interopRequireDefault(_catalog);

var $ = require('jquery');

if ((0, _detectedDevice2['default'])()) $('html').addClass('touch');else $('html').addClass('no-touch');

if ((0, _getMobileOperatingSystem2['default'])() === "ios") $('body').attr('data-device', 'ios');

if ((0, _getMobileOperatingSystem2['default'])() === "android") $('body').attr('data-device', 'android');

(0, _inputFocus2['default'])();

(0, _createBy2['default'])();_modal2['default'].open('footer form [type=submit]', '.modal__subscribe--overlay');
_modal2['default'].open('footer form [type=email]', '.modal__subscribe--overlay');
_modal2['default'].onlyBtnClose('.modal--destroy');

(0, _menuBtn2['default'])();

if ((0, _ie2['default'])() == 11) $('body').addClass('ie');

_header2['default'].init();

_catalog2['default'].init();