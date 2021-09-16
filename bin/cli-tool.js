#!/usr/bin/env node

'use strict';

const path = require('path');
const { App } = require('../main');

// init app
const app = new App({
  name: 'cli-tool',
  version: '1.3.14',
  desc: 'application_desc',
  commands_dir: path.join(__dirname, '../commands'),
  commands_sort: ['help', 'init', 'make', 'exec'],
  locale: {
    dir: path.join(__dirname, '../locales'),
    sets: ['en-US', 'zh-CN']
  }
});

// enable use locales
app.locale();

// start cli application
app.start();
