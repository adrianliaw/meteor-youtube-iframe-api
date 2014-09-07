Package.describe({
  summary: "Youtube Iframe API",
  version: "1.0.333",
  git: "http://github.com/adrianliaw/meteor-youtube-iframe-api.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('lib/iframe_api.js', 'client');
  api.export('YT', 'client');
  api.export('YTConfig', 'client');
});
