Package.describe({
  name: 'raix:stubfence',
  summary: 'Fence/stop method stubs running, temporarily stop latency compensation',
  version: '1.0.3',
  git: 'https://github.com/raix/stubfence.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use([
    'meteor',
    'mongo',
    'ddp',
    'underscore'
  ], 'client');
  api.addFiles('util.js', 'client');
  api.addFiles('nostub.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('raix:stubfence');
  api.addFiles('nostub-tests.js');
});
