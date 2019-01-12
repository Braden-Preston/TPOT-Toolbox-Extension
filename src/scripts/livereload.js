'use strict';

import ext from "./utils/ext";

var LIVERELOAD_HOST = 'localhost:';
var LIVERELOAD_PORT = 35729;
var connection = new WebSocket('ws://' + LIVERELOAD_HOST + LIVERELOAD_PORT + '/livereload');

console.log('%c[background] Live Reload Started', 'color: limegreen;')

connection.onerror = function (error) {
  console.log('%creload connection got error:', 'color: red;', error);
};

connection.onmessage = function (e) {
  console.log("%cMSG", 'color: chocolate;', e)
  if (e.data) {
    var data = JSON.parse(e.data);
    if (data && data.command === 'reload') {
      ext.runtime.reload();
    }
  }
};