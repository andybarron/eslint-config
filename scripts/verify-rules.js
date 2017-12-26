'use strict';
const ruleNames = require('./rule-names');
const config = require('..').rules;

let ok = true;

for (const rule of ruleNames) {
  if (!(rule in config)) {
    ok = false;
    console.error(`Missing rule: "${rule}"`);
  }
}

for (const rule of Object.keys(config)) {
  if (!ruleNames.includes(rule)) {
    ok = false;
    console.error(`Found deprecated or non-existent rule: "${rule}"`);
  }
}

if (!ok) {
  throw new Error('Rule verification failed');
}
