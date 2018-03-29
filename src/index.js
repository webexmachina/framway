require('hammerjs'); // importing hammer.js
require('jquery-mousewheel'); // importing jquery-mousewheel

require('./scss/framway.scss');
require('./js/framway.js');

app.loadComponents([
  'tabs',
  'block-std',
  'goto',
  'FWslider',
  'foldingbox',
  // 'brick',
  'guideline',
]);

