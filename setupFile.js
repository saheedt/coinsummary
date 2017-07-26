import {jsdom} from 'jsdom';


const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
global.document = jsdom(documentHTML);
global.window = document.parentWindow;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.window.keypress = () => {
	global.window.dispatchEvent(new Event('keydown'));
};