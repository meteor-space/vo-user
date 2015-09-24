
Package.describe({
  summary: 'Value Objects for user domains.',
  name: 'space:vo-user',
  version: '0.2.0',
  git: 'https://github.com/meteor-space/vo-user.git'
});

Package.onUse(function(api) {

  api.versionsFrom('METEOR@1.0');

  api.use([
    'check',
    'underscore',
    'space:messaging@1.7.1'
  ]);

  api.add_files([
    'source/email-address.js',
    'source/username.js',
    'source/password.js',
  ]);

  api.export('EmailAddress');
  api.export('Username');
  api.export('Password');

});

Package.onTest(function(api) {

  api.use([
    'check',
    'ejson',
    'space:vo-user',
    'practicalmeteor:munit@2.1.5',
    'space:testing@1.3.0',
  ]);

  api.add_files([
    'tests/email-address.unit.js',
    'tests/username.unit.js',
    'tests/password.unit.js',
  ]);

});
