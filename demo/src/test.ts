import {SDK} from '@iungo/sdk';
import {Subscriptions} from '@iungo/subscriptions';

const sdk = new SDK({
    clientId: 'foo',
    clientSecret: 'foo',
    server: SDK.server.production,
});

const subscriptions = new Subscriptions({sdk});

const sub = subscriptions.createSubscription({});
