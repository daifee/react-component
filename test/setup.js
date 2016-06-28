/**
 * extend extensions
 * 因为 webpack 的配置
 */
const no = () => {};
require.extensions['.jsx'] = require.extensions['.js'];
require.extensions['.scss'] = no;
require.extensions['.css'] = no;


import {jsdom} from 'jsdom';

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
