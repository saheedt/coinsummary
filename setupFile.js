import { JSDOM } from 'jsdom';

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
const { document } = (new JSDOM(documentHTML)).window;
global.document = document;
global.window = document.defaultView;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.window.keypress = () => {
	global.window.dispatchEvent(new Event('keydown'));
};