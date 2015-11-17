
Package.describe({
  name: 'space:vo-user',
  summary: 'Value Objects for user domains.',
  version: '0.2.1',
  git: 'https://github.com/meteor-space/vo-user.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.0');

  api.use([
    'check',
    'underscore',
    'ecmascript',
    'space:messaging@2.1.0'
  ]);

  api.add_files([
    'source/email-address.js',
    'source/username.js',
    'source/password.js'
  ]);

  api.export('EmailAddress');
  api.export('Username');
  api.export('Password');

});

Package.onTest(function(api) {

  api.use([
    'check',
    'ejson',
    'ecmascript',
    'space:vo-user',
    'practicalmeteor:munit@2.1.5',
    'space:testing@1.5.0'
  ]);

  api.add_files([
    'tests/email-address.unit.js',
    'tests/username.unit.js',
    'tests/password.unit.js'
  ]);

});
