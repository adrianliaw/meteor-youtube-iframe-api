Package.describe({
  summary: " \* Fill me in! *\ ",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('adrianliaw:youtube-iframe-api.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('adrianliaw:youtube-iframe-api');
  api.addFiles('adrianliaw:youtube-iframe-api-tests.js');
});
