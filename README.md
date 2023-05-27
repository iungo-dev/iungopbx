[![Node.js Package](https://github.com/iungopbx/iungo-js/actions/workflows/npm-publish.yml/badge.svg?branch=main&event=status)](https://github.com/iungopbx/iungo-js/actions/workflows/npm-publish.yml)

# Iungo JavaScript SDK


The Iungo Javascript SDK allows developers building client and server-side javascript applications to interface with the following Iungo APIs more easily:

## What's in this repository/SDK?

This SDK contains two components useful to developers. They are:

- [SDK](sdk) &mdash; Main SDK package, interacts with Iungo REST API
- [Subscriptions SDK](subscriptions) &mdash; Additional SDK which listens to push notifications


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

## About Iungo

Iungo is a leading provider of global enterprise cloud communications and collaboration solutions. More flexible and cost-effective than legacy on-premises systems, Iungo empowers modern mobile and distributed workforces to communicate, collaborate, and connect from any location, on any device and via any mode. Iungo provides unified voice, video, team messaging and collaboration, conferencing, online meetings, digital customer engagement and integrated contact center solutions for enterprises globally. Iungo’s open platform integrates with leading business apps and enables customers to easily customize business workflows.
