cordova.define("@moodlehq/cordova-plugin-advanced-http.global-configs", function(require, exports, module) { var globalConfigs = {
  headers: {},
  serializer: 'urlencoded',
  followRedirect: true,
  timeout: 60.0,
  connectTimeout: 60.0,
  readTimeout: 60.0
};

module.exports = globalConfigs;

});
