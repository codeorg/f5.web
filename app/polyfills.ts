import 'core-js/es6';
import 'core-js/es7/reflect';
import 'lodash';
import './lib/fingerprint2.js';
import './lib/dateFormat.js';
require('angular2-ie9-shims/shims_for_IE.dev');
require('zone.js/dist/zone');
if (process.env.ENV === 'production') {
    // Production
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}