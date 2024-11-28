import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'moodlemobile',
  webDir: 'www',
  cordova: {
    preferences: {
      permissions: 'none',
      orientation: 'default',
      'target-device': 'universal',
      fullscreen: 'false',
      'stay-in-webview': 'false',
      webviewbounce: 'false',
      UIWebViewBounce: 'false',
      DisallowOverscroll: 'true',
      'prerendered-icon': 'true',
      AppendUserAgent: 'MoodleMobile 5.0.0 (50000)',
      BackupWebStorage: 'none',
      ScrollEnabled: 'false',
      KeyboardDisplayRequiresUserAction: 'false',
      HideKeyboardFormAccessoryBar: 'false',
      AllowInlineMediaPlayback: 'true',
      LoadUrlTimeoutValue: '60000',
      'load-url-timeout': '60000',
      AutoHideSplashScreen: 'false',
      'android-minSdkVersion': '24',
      'android-targetSdkVersion': '35',
      AndroidPersistentFileLocation: 'Compatibility',
      AndroidInsecureFileModeEnabled: 'true',
      CustomURLSchemePluginClearsAndroidIntent: 'true',
      'deployment-target': '13.0',
      iosPersistentFileLocation: 'Compatibility',
      iosScheme: 'moodleappfs',
      WKWebViewOnly: 'true',
      WKFullScreenEnabled: 'true',
      AndroidXEnabled: 'true',
      GradlePluginGoogleServicesEnabled: 'true',
      GradlePluginGoogleServicesVersion: '4.3.15',
      GradlePluginKotlinVersion: '1.7.21',
      StatusBarOverlaysWebView: 'false',
      StatusBarBackgroundColor: '#FFFFFF',
      NavigationBarBackgroundColor: '#FFFFFF'
    }
  }
};

export default config;
