import {SDK} from '@iungopbx/sdk';
import {Subscriptions} from '@iungopbx/subscriptions';

const sdk = new SDK({
    clientId: 'foo',
    clientSecret: 'foo',
    server: SDK.server.production,
});

const subscriptions = new Subscriptions({sdk});

const sub = subscriptions.createSubscription({});
