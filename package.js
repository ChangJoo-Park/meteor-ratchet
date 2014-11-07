Package.describe({
  name: 'pcjpcj2:ratchet',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('pcjpcj2:ratchet.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pcjpcj2:ratchet');
  api.addFiles('pcjpcj2:ratchet-tests.js');
});
