const $ = require('jquery');

/*[1] detected device*/
import {default as is_touch_device} from './detectedDevice';

if (is_touch_device()) $('html').addClass('touch');
else $('html').addClass('no-touch');
/*[1] detected device*/


/*[2] safariDetected*/
import {default as getMobileOperatingSystem} from './getMobileOperatingSystem';

if (getMobileOperatingSystem() === "ios") $('body').attr('data-device', 'ios');

if (getMobileOperatingSystem() === "android") $('body').attr('data-device', 'android');
/*[2] safariDetected*/


/*[3] inputFocus*/
import {default as inputFocus} from './inputFocus';

inputFocus();
/*[3] inputFocus*/


/*[4] createBy*/
import {default as createBy} from './createBy';

createBy();
/*[4] createBy*/


/*[5] modal*/
import {default as modal} from './modal';

//modal subscribe
modal.open('footer form [type=submit]', '.modal__subscribe--overlay');
modal.open('footer form [type=email]', '.modal__subscribe--overlay');
modal.onlyBtnClose('.modal--destroy');
/*[5] modal*/


/* [7] menuBtn*/
import {default as menuBtn} from './menuBtn';

menuBtn();
/* [7] menuBtn*/


/*[8] ie*/
import {default as ie} from './ie';

if(ie() == 11) $('body').addClass('ie');

/*[8] header settings*/
import {default as header} from './header';

header.init();

/*[9] catalog settings*/
import {default as catalog} from './catalog';

catalog.init();