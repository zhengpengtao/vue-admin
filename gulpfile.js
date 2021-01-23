'use strict'
const gulp = require('gulp'), // eslint-disable-line
  shell = require('gulp-shell')

gulp.task('dev', shell.task([
  'npm run build:stage'
  // 'scp ./dist/* root@121.36.87.116:/home/zpt/web-dev'
]))

gulp.task('pro', shell.task([
  'npm run build:prod'
  // 'scp ./dist/* root@121.36.87.116:/home/zpt/web-pro'
]))
