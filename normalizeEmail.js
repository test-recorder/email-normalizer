function normalizeEmail(email) {
  if (typeof email !== 'string') {
    return '';
  }
  const clean = email.trim();
  const atIndex = clean.lastIndexOf('@');
  if (atIndex === -1) {
    return clean;
  }
  return clean.slice(0, atIndex + 1) + clean.slice(atIndex + 1).toLowerCase();
}

module.exports = { normalizeEmail };
