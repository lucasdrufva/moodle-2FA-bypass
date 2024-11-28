cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
        "id": "cordova-plugin-file.DirectoryEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
        "id": "cordova-plugin-file.DirectoryReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Entry.js",
        "id": "cordova-plugin-file.Entry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/File.js",
        "id": "cordova-plugin-file.File",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileEntry.js",
        "id": "cordova-plugin-file.FileEntry",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileError.js",
        "id": "cordova-plugin-file.FileError",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileReader.js",
        "id": "cordova-plugin-file.FileReader",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileSystem.js",
        "id": "cordova-plugin-file.FileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
        "id": "cordova-plugin-file.FileUploadOptions",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
        "id": "cordova-plugin-file.FileUploadResult",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/FileWriter.js",
        "id": "cordova-plugin-file.FileWriter",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Flags.js",
        "id": "cordova-plugin-file.Flags",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
        "id": "cordova-plugin-file.LocalFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/Metadata.js",
        "id": "cordova-plugin-file.Metadata",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
        "id": "cordova-plugin-file.ProgressEvent",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystems.js",
        "id": "cordova-plugin-file.fileSystems",
        "pluginId": "cordova-plugin-file"
    },
    {
        "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
        "id": "cordova-plugin-file.requestFileSystem",
        "pluginId": "cordova-plugin-file",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
        "id": "cordova-plugin-file.resolveLocalFileSystemURI",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
        "id": "cordova-plugin-file.isChrome",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/Preparing.js",
        "id": "cordova-plugin-file.Preparing",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/src/browser/FileProxy.js",
        "id": "cordova-plugin-file.browserFileProxy",
        "pluginId": "cordova-plugin-file",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
        "id": "cordova-plugin-file.fileSystemPaths",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-file/www/browser/FileSystem.js",
        "id": "cordova-plugin-file.firefoxFileSystem",
        "pluginId": "cordova-plugin-file",
        "merges": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/cookie-handler.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.cookie-handler",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/dependency-validator.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.dependency-validator",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/error-codes.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.error-codes",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/global-configs.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.global-configs",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/helpers.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.helpers",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/js-util.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.js-util",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/local-storage-store.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.local-storage-store",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/lodash.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.lodash",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/messages.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.messages",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/ponyfills.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.ponyfills",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/public-interface.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.public-interface",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/umd-tough-cookie.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.tough-cookie",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/url-util.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.url-util",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http"
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/www/advanced-http.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.http",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http",
        "clobbers": [
            "cordova.plugin.http"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-advanced-http/src/browser/cordova-http-plugin.js",
        "id": "@moodlehq/cordova-plugin-advanced-http.http-proxy",
        "pluginId": "@moodlehq/cordova-plugin-advanced-http",
        "runs": true
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-camera/www/CameraConstants.js",
        "id": "@moodlehq/cordova-plugin-camera.Camera",
        "pluginId": "@moodlehq/cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "@moodlehq/cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "@moodlehq/cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-camera/www/Camera.js",
        "id": "@moodlehq/cordova-plugin-camera.camera",
        "pluginId": "@moodlehq/cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-camera/src/browser/CameraProxy.js",
        "id": "@moodlehq/cordova-plugin-camera.CameraProxy",
        "pluginId": "@moodlehq/cordova-plugin-camera",
        "runs": true
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-file-opener/www/plugins.FileOpener2.js",
        "id": "@moodlehq/cordova-plugin-file-opener.FileOpener2",
        "pluginId": "@moodlehq/cordova-plugin-file-opener",
        "clobbers": [
            "cordova.plugins.fileOpener2"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-file-opener/www/browser/isChrome.js",
        "id": "@moodlehq/cordova-plugin-file-opener.isChrome",
        "pluginId": "@moodlehq/cordova-plugin-file-opener",
        "runs": true
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-file-opener/src/browser/FileSaver.min.js",
        "id": "@moodlehq/cordova-plugin-file-opener.FileSaver",
        "pluginId": "@moodlehq/cordova-plugin-file-opener",
        "clobbers": [
            "FileSaver"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-file-opener/src/browser/FileOpener2.js",
        "id": "@moodlehq/cordova-plugin-file-opener.FileOpener2Proxy",
        "pluginId": "@moodlehq/cordova-plugin-file-opener",
        "runs": true
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-file-transfer/www/FileTransferError.js",
        "id": "@moodlehq/cordova-plugin-file-transfer.FileTransferError",
        "pluginId": "@moodlehq/cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-file-transfer/www/FileTransfer.js",
        "id": "@moodlehq/cordova-plugin-file-transfer.FileTransfer",
        "pluginId": "@moodlehq/cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-file-transfer/www/browser/FileTransfer.js",
        "id": "@moodlehq/cordova-plugin-file-transfer.BrowserFileTransfer",
        "pluginId": "@moodlehq/cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "@moodlehq/cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "@moodlehq/cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "@moodlehq/cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "@moodlehq/cordova-plugin-inappbrowser",
        "runs": true
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-intent/www/IntentShim.js",
        "id": "@moodlehq/cordova-plugin-intent.IntentShim",
        "pluginId": "@moodlehq/cordova-plugin-intent",
        "clobbers": [
            "intentShim"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-ionic-webview/src/www/util.js",
        "id": "@moodlehq/cordova-plugin-ionic-webview.IonicWebView",
        "pluginId": "@moodlehq/cordova-plugin-ionic-webview",
        "clobbers": [
            "Ionic.WebView"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-qrscanner/www/www.min.js",
        "id": "@moodlehq/cordova-plugin-qrscanner.QRScanner",
        "pluginId": "@moodlehq/cordova-plugin-qrscanner",
        "clobbers": [
            "QRScanner"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-qrscanner/src/browser/plugin.min.js",
        "id": "@moodlehq/cordova-plugin-qrscanner.QRScannerProxy",
        "pluginId": "@moodlehq/cordova-plugin-qrscanner",
        "runs": true
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-statusbar/www/statusbar.js",
        "id": "@moodlehq/cordova-plugin-statusbar.statusbar",
        "pluginId": "@moodlehq/cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "@moodlehq/cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "@moodlehq/cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/@moodlehq/cordova-plugin-zip/zip.js",
        "id": "@moodlehq/cordova-plugin-zip.Zip",
        "pluginId": "@moodlehq/cordova-plugin-zip",
        "clobbers": [
            "zip"
        ]
    },
    {
        "file": "plugins/@moodlehq/phonegap-plugin-push/www/push.js",
        "id": "@moodlehq/phonegap-plugin-push.PushNotification",
        "pluginId": "@moodlehq/phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/@moodlehq/phonegap-plugin-push/www/browser/push.js",
        "id": "@moodlehq/phonegap-plugin-push.BrowserPush",
        "pluginId": "@moodlehq/phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "file": "plugins/cordova-clipboard/www/clipboard.js",
        "id": "cordova-clipboard.Clipboard",
        "pluginId": "cordova-clipboard",
        "clobbers": [
            "cordova.plugins.clipboard"
        ]
    },
    {
        "file": "plugins/cordova-plugin-badge/www/badge.js",
        "id": "cordova-plugin-badge.Badge",
        "pluginId": "cordova-plugin-badge",
        "clobbers": [
            "cordova.plugins.notification.badge"
        ]
    },
    {
        "file": "plugins/cordova-plugin-badge/src/browser/favico.min.js",
        "id": "cordova-plugin-badge.Badge.Favico",
        "pluginId": "cordova-plugin-badge",
        "clobbers": [
            "cordova.plugins.notification.badge.Favico"
        ]
    },
    {
        "file": "plugins/cordova-plugin-badge/src/browser/BadgeProxy.js",
        "id": "cordova-plugin-badge.Badge.Proxy",
        "pluginId": "cordova-plugin-badge",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-chooser/www/chooser.js",
        "id": "cordova-plugin-chooser.Chooser",
        "pluginId": "cordova-plugin-chooser",
        "clobbers": [
            "chooser"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-local-notification/www/local-notification.js",
        "id": "cordova-plugin-local-notification.LocalNotification",
        "pluginId": "cordova-plugin-local-notification",
        "clobbers": [
            "cordova.plugins.notification.local"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/CaptureAudioOptions.js",
        "id": "cordova-plugin-media-capture.CaptureAudioOptions",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureAudioOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/CaptureImageOptions.js",
        "id": "cordova-plugin-media-capture.CaptureImageOptions",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureImageOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/CaptureVideoOptions.js",
        "id": "cordova-plugin-media-capture.CaptureVideoOptions",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureVideoOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/CaptureError.js",
        "id": "cordova-plugin-media-capture.CaptureError",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/MediaFileData.js",
        "id": "cordova-plugin-media-capture.MediaFileData",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "MediaFileData"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/MediaFile.js",
        "id": "cordova-plugin-media-capture.MediaFile",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "MediaFile"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/helpers.js",
        "id": "cordova-plugin-media-capture.helpers",
        "pluginId": "cordova-plugin-media-capture",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-media-capture/www/capture.js",
        "id": "cordova-plugin-media-capture.capture",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "navigator.device.capture"
        ]
    },
    {
        "file": "plugins/cordova-plugin-media-capture/src/browser/CaptureProxy.js",
        "id": "cordova-plugin-media-capture.CaptureProxy",
        "pluginId": "cordova-plugin-media-capture",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-moodleapp/www/index.js",
        "id": "cordova-plugin-moodleapp.moodleapp",
        "pluginId": "cordova-plugin-moodleapp",
        "clobbers": [
            "cordova.MoodleApp"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
        "id": "cordova-plugin-screen-orientation.screenorientation",
        "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
            "cordova.plugins.screenorientation",
            "screen.orientation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-wkuserscript/www/wkuserscript.js",
        "id": "cordova-plugin-wkuserscript.WKUserScript",
        "pluginId": "cordova-plugin-wkuserscript",
        "clobbers": [
            "window.WKUserScript"
        ]
    },
    {
        "file": "plugins/cordova-plugin-wkwebview-cookies/www/wkwebview-cookies.js",
        "id": "cordova-plugin-wkwebview-cookies.WKWebViewCookies",
        "pluginId": "cordova-plugin-wkwebview-cookies",
        "clobbers": [
            "window.WKWebViewCookies"
        ]
    },
    {
        "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
        "id": "cordova-sqlite-storage.SQLitePlugin",
        "pluginId": "cordova-sqlite-storage",
        "clobbers": [
            "SQLitePlugin"
        ]
    },
    {
        "file": "plugins/cordova-sqlite-storage/node_modules/cordova-sqlite-storage-dependencies/sql-asm-memory-growth.js",
        "id": "cordova-sqlite-storage.sql",
        "pluginId": "cordova-sqlite-storage",
        "runs": true
    },
    {
        "file": "plugins/cordova-sqlite-storage/src/browser/SQLiteProxy.js",
        "id": "cordova-sqlite-storage.SQLiteProxy",
        "pluginId": "cordova-sqlite-storage",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-file": "8.1.0",
    "@moodlehq/cordova-plugin-advanced-http": "3.3.1-moodle.1",
    "@moodlehq/cordova-plugin-camera": "7.0.0-moodle.1",
    "@moodlehq/cordova-plugin-file-opener": "4.0.0-moodle.1",
    "@moodlehq/cordova-plugin-file-transfer": "2.0.0-moodle.2",
    "@moodlehq/cordova-plugin-inappbrowser": "5.0.0-moodle.3",
    "@moodlehq/cordova-plugin-intent": "2.2.0-moodle.3",
    "@moodlehq/cordova-plugin-ionic-webview": "5.0.0-moodle.5",
    "@moodlehq/cordova-plugin-qrscanner": "3.0.1-moodle.5",
    "@moodlehq/cordova-plugin-statusbar": "4.0.0-moodle.3",
    "@moodlehq/cordova-plugin-zip": "3.1.0-moodle.1",
    "@moodlehq/phonegap-plugin-push": "4.0.0-moodle.10",
    "cordova-clipboard": "1.3.0",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-badge": "0.8.9",
    "cordova-plugin-chooser": "1.3.1",
    "cordova-plugin-customurlscheme": "5.0.2",
    "cordova-plugin-device": "2.1.0",
    "cordova-plugin-geolocation": "5.0.0",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-local-notification": "1.0.0",
    "cordova-plugin-media-capture": "5.0.0",
    "cordova-plugin-moodleapp": "0.0.0",
    "cordova-plugin-network-information": "3.0.0",
    "cordova-plugin-prevent-override": "1.0.1",
    "cordova-plugin-screen-orientation": "3.0.4",
    "cordova-plugin-wkuserscript": "1.0.1",
    "cordova-plugin-wkwebview-cookies": "1.0.1",
    "cordova-sqlite-storage": "6.1.0",
    "nl.kingsquare.cordova.background-audio": "1.0.1"
}
// BOTTOM OF METADATA
});