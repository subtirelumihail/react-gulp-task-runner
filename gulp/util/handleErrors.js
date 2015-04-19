'use strict';
var notify  = require('gulp-notify');
var chalk   = require('chalk');

module.exports = function() {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  
  console.log('-----');
  console.log(chalk.blue('Error Details: '));
  console.log(chalk.yellow(args));
  console.log('-----');
  
  //Stop the pipe
  this.emit('end');
};
