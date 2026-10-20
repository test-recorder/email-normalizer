const test = require('node:test');
const assert = require('node:assert/strict');
const { normalizeEmail } = require('./normalizeEmail');

test('returns empty string for non-string input', () => {
  assert.equal(normalizeEmail(null), '');
});

test('trims surrounding whitespace', () => {
  assert.equal(normalizeEmail('  alex@test.com  '), 'alex@test.com');
});

test('normalizes mixed-case domain to lowercase', () => {
  assert.equal(normalizeEmail('alex@EXAMPLE.COM'), 'alex@example.com');
});

test('preserves already valid lowercase email', () => {
  assert.equal(normalizeEmail('alex@example.com'), 'alex@example.com');
});
test('normalizes complex multi-part subdomains correctly', () => {
  assert.equal(
    normalizeEmail('support@DEV.MAIL.SERVICE.ORG'),
    'support@dev.mail.service.org'
  );
});
test('handles invalide primitive inputs safely wihtout throwing', () => {
  assert.equal(normalizeEmail(undefined), '');
  assert.equal(normalizeEmail(1024), '');
  assert.equal(normalizeEmail({}), '');
});