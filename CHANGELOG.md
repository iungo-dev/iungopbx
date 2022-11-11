# Change Log

This document contains only major functionality changes in certain versions. Minor fixes/updates are omitted.

## 4.0

- SDK will not add `/restapi/v1.0` to URLs
- SDK was separated into 2 packages: `@iungo/sdk` and `@iungo/subscriptions`
- `appKey` and `appSecret` were replaced with `clientId` and `clientSecret`
- Async implementation of `Storage`
- Platform method `createUrl('xxx', {addToken: true})` has been extracted as separate async method `signUrl('xxx')`
- `ApiResponse` class was removed, all methods return plain `Response` which can be worked on using `Client`
- Bower was discontinued

## 3.0

- SDK no longer runs refresh queue across multiple tabs
- SDK is no longer shipped with the bundle, you need to add polyfills and PUBNUB manually
- Migration Guides merged into one Change Log
- `SDK.core.Observable` has been replaced by NodeJS's `EventEmitter` and is accessible via `SDK.core.EventEmitter`
- `Platform.login` does not support `remember` parameter anymore, if you wish to supply custom token TTLs,
    use `accessTokenTtl` and `refreshTokenTtl`
- `Subscription` will not throw an error when it can't renew because it's expired when timeout hits (computer woke up
    after sleep, for example), it will automatically `subscribe` again with the same `eventFilter`s
- Removed `CachedSubscription` queue-related methods
- `Cache.setPrefix` has been removed, prefix cannot be changed, create a new instance of SDK with new prefix instead
- `SDK.*.*` classes are no longer exposed, use appropriate constructor options to alter defaults

## 2.0

- Helpers were moved to separate repository: [Iungo JS Helpers](https://github.com/iungopbx/iungo-js-helpers).
- Root JS name has changed from `IUNGOSDK` to `Iungo.SDK`
- New naming convention: `getSomething()` methods are now simply `something()`
- `Auth` class inside `Platform`
- `AjaxObserver` functionality been moved to `Client`
- New `ApiResponse` interface that wraps native Requests/Responses:
    - `apiResponse.json()` instead of `ajax.json`
    - `apiResponse.multipart()` instead of `ajax.responses`
    - `apiResponse.request()` and `ajax.response()` to access to DOM Request and DOM Response accordingly
    - `apiResponse.request().headers` and `ajax.response().headers` should be used to access headers
- `Subscription` interface changes

## 1.2

- AJAX object is now represented by 2 separate objects:
    - `Request`
    - `Response`
- AJAX error has 2 properties: `e.request` and `e.response` and backward-compatible `e.ajax` which is equal to
    `e.response`.
- AJAX Response now has `responses` property and `json` property along with backward-compatible `data` property

## 0.14

The key differences between versions:
- Promises/A+
    - Native ECMAScript6 where available (Chrome, FireFox, Safari)
    - RSVP polyfill for older browsers
- IUNGOSDK is now a constructor
    - Instance has a context, so it is possible to have multiple simultaneous connections to API
- All other objects are obtained through IUNGOSDK instance's getters instead of static methods of classes

### Initialization

Before:

```js
var platform = IUNGOSDK.core.Platform.getInstance();
```

After:

```js
var iungosdk = new IUNGOSDK(), // save this object, everything else is provided by it
    platform = iungosdk.getPlatform();
```

### Promises and API Calls

Before:

```js
platform.apiCall({
    url: '...',
    success: function(data){ ... }
    error: function(e){ ... }
});
```

After:

```js
platform.apiCall({url: '...'}).then(function(ajax){
    // do something with ajax.data
}).catch(function(e){ ... });
```

This also applies to any other place that formerly accepted `success` and `error` callbacks.

- platform.isAuthorized|refresh|authorize|logout
- subscription.register|subscribe|renew|remove

### AjaxObserver

Before:

```js
IUNGOSDK.core.Ajax.observer.on(...)
```

After:

```js
iungosdk.getAjaxObserver().on(...);
```

### Call Monitoring Object is deprecated

Call Monitoring object is now replaced with a number of Helper objects, which gives developers more control over
application logic while processing logic is still maintained by SDK.

Take a look on **Call Management Using JavaScript** section of **Usage Manual**, and big **AngularJS Demo** for
implementation examples.