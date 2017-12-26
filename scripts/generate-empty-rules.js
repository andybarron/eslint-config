'use strict';
const fs = require('fs');
const ruleNames = require('./rule-names');

const INDENT = 2;
const OFF = 0;

const ruleEntries = ruleNames.map((name) => ({ [name]: OFF }));
const rules = Object.assign(Object.create(null), ...ruleEntries);

const stringified = JSON.stringify(rules, null, INDENT);

const contents = `module.exports = ${stringified};\n`;

// eslint-disable-next-line no-sync
fs.writeFileSync('lib/rules.js', contents);
