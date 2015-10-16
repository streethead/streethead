// Expose reusable variables
global.gulp = require('gulp');
global.plugins = require('gulp-load-plugins')();
global.config = require('./gulp/config.json');
global.browserSync = require('browser-sync');

// Load all the tasks
var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });