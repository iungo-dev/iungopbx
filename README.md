# Iungo JavaScript SDK

[![TravisCI Status](https://travis-ci.com/iungo/iungo-js.svg?branch=master)](https://travis-ci.com/iungo/iungo-js)
[![Coverage Status](https://coveralls.io/repos/github/iungo/iungo-js/badge.svg?branch=master)](https://coveralls.io/github/iungo/iungo-js)
[![Chat](https://img.shields.io/badge/chat-on%20glip-orange.svg)](https://iungo.github.io/join-iungo/)

The Iungo Javascript SDK allows developers building client and server-side javascript applications to interface with the following Iungo APIs more easily:

* [Voice](https://developer.iungo.com/api-products/voice)
* [Messaging](https://developer.iungo.com/api-products/sms), e.g. Fax, SMS, voicemail, etc.
* [Glip Team Messaging](https://developer.iungo.com/api-products/team-messaging)
* [Call Management](https://developer.iungo.com/api-products/configuration)
* [Meetings](https://developers.iungo.com/api-products/meetings)

## What's in this repository/SDK?

This SDK contains two components useful to developers. They are:

- [SDK](sdk) &mdash; Main SDK package, interacts with Iungo REST API
- [Subscriptions SDK](subscriptions) &mdash; Additional SDK which listens to push notifications

## Are you a first-time Iungo Developer?

If this is your first time building a Iungo application, we recommend you get started online using our SMS Quick Start guide which will help you get up-and-running in minutes.

* [Get Started Using Iungo &raquo;](https://developers.iungo.com/guide/sms/quick-start)

## Additional Resources

* [Iungo Developer Guide](https://developer.iungo.com/api-reference) - a comprehensive set of tutorials to help developers build their first application and to evolve existing applications on the platform.

* [Iungo API Reference](https://developer.iungo.com/api-reference) - an interactive reference for the Iungo API that allows developers to make API calls with no code.

You are viewing documentation for upcoming `4.0.0` release. Follow [this link to see 3.x.x documentation](https://github.com/iungopbx/iungo-js/tree/v3).

## Running Demos in this SDK

In this SDK are a number of sample/demo applications. Each of these demo apps require you to create a `.env` file with the following contents:

```
BROWSER=false
SKIP_PREFLIGHT_CHECK=true

DEMO_PORT=3000
REACT_DEMO_PORT=3030
REDUX_DEMO_PORT=3033

REACT_APP_API_SERVER=https://dev2.iungo.cloud
REACT_APP_API_CLIENT_ID=XXX
```

**Be sure to replace "XXX" with your app's Client ID.**

## Getting help and support

If you are having difficulty using this SDK, or working with the Iungo API, please visit our [developer community forums](https://community.iungo.com/spaces/144/) for help and to get quick answers to your questions. If you wish to contact the Iungo Developer Support team directly, please [submit a help ticket](https://developers.iungo.com/support/create-case) from our developer website.

## About Iungo

Iungo is a leading provider of global enterprise cloud communications and collaboration solutions. More flexible and cost-effective than legacy on-premises systems, Iungo empowers modern mobile and distributed workforces to communicate, collaborate, and connect from any location, on any device and via any mode. Iungo provides unified voice, video, team messaging and collaboration, conferencing, online meetings, digital customer engagement and integrated contact center solutions for enterprises globally. Iungo’s open platform integrates with leading business apps and enables customers to easily customize business workflows.
