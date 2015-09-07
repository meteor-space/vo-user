
Package.describe({
  summary: 'Value Objects for user domains.',
  name: 'space:vo-user',
  version: '0.1.0',
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.0');

  api.use([
    'check',
    'space:messaging@1.6.0'
  ]);

  api.add_files([
    'source/email-address.js',
  ]);

  api.export('EmailAddress');

});

Package.onTest(function(api) {

  api.use([
    'check',
    'space:vo-user',
    'practicalmeteor:munit@2.1.5',
    'space:testing@1.3.0',
  ]);

  api.add_files([
    'tests/email-address.unit.js',
  ]);

});
