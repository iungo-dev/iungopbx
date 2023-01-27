(function() {

    window.getSDK = function() {

        var appKey = localStorage.getItem('iungo-demo-appKey');
        var appSecret = localStorage.getItem('iungo-demo-appSecret');
        var server = localStorage.getItem('iungo-demo-server');

        if (!appKey || !server) {
            if (location.href.indexOf('apiKey.html') == -1) {
                location.assign('apiKey.html');
            }
        }

        var sdk = new Iungo.SDK({
            server: server,
            clientId: appKey,
            clientSecret: appSecret,
            appName: 'Demo',
            appVersion: Iungo.SDK.version,
            redirectUri: decodeURIComponent(window.location.href.split('login', 1) + 'oauth/redirect.html')
        });

        var platform = sdk.platform();

        platform.on(platform.events.refreshError, function() {
            if (location.href.indexOf('login.html') == -1) {
                location.assign('login.html');
            }
        });

        platform.on(platform.events.logoutSuccess, function() {
            if (location.href.indexOf('login.html') == -1) {
                location.assign('login.html');
            }
        });

        return sdk;

    };

})();
