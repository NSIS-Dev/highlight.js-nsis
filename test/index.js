const fs = require('fs');
const hljs = require('highlight.js');
const hljsDefineNSIS = require('../nsis');
const test = require('ava');
const { join } = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

// Let's run the tests
test('Generate markup', async t => {
  const code = await readFile(join(__dirname, 'fixtures/actual.txt'), 'utf-8');
  const actual = hljs.highlight('nsis', code).value.trim();
  const expected = (await readFile(join(__dirname, 'fixtures/expected.txt'), 'utf-8')).trim();

  t.is(actual, expected);
});

test('Detect language', async t => {
  const code = await readFile(join(__dirname, 'fixtures/actual.txt'), 'utf-8');
  const actual = hljs.highlightAuto(code).language;
  const expected = 'nsis';

  t.is(actual, expected);
});
