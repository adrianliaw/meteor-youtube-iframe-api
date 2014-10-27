Package.describe({
  summary: "Youtube Iframe API",
  version: "1.3.122",
  git: "http://github.com/adrianliaw/meteor-youtube-iframe-api.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('jquery', 'client');
  api.addFiles('lib/iframe_api.js', 'client');
  api.export('YT', 'client');
  api.export('YTConfig', 'client');
});
