'use strict';
const eslint = require('eslint');

const entries = [...eslint.linter.getRules().entries()];
const names = entries
  .filter(([_name, data]) => !data.meta.deprecated)
  .map(([name, _data]) => name)
  .sort();

module.exports = names;
