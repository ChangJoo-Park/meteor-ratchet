Package.describe({
  name: 'pcjpcj2:ratchet',
  summary: ' Ratchet UI Framework for Meteor',
  version: '2.0.2',
  git: 'https://github.com/pcjpcj2/meteor-ratchet'
});

Package.onUse(function (api) {
  api.versionsFrom("0.9.3.1");

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('ratchet-2.0.2');
  api.addFiles(path.join(asset_path, 'css', 'ratchet.css'), 'client');
  api.addFiles(path.join(asset_path, 'css', 'ratchet-theme-ios.css'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'ratchet.js'), 'client');

  // fonts
  api.addFiles(path.join(asset_path, 'fonts', 'ratchicons.eot'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'ratchicons.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'ratchicons.svg'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'ratchicons.woff'), 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard ratchet css so
  // that its styles take precedence.
  api.addFiles(path.join('ratchet-override.css'), 'client');
});