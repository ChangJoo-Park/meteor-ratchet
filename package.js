Package.describe({
  name: 'pcjpcj2:ratchet',
  summary: ' Ratchet UI Framework for Meteor',
  version: '1.0.0',
  git: 'https://github.com/pcjpcj2/meteor-ratchet'
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
