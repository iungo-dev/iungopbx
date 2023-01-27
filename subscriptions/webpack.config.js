const createConfig = require('@iungo/sdk-utils/webpack');
const path = require('path');

module.exports = createConfig({
    filename: 'iungo-subscriptions',
    entry: './src/Subscriptions.ts',
    outputPath: path.resolve(__dirname, 'dist'),
    libraryName: 'Subscriptions',
    externals: {
        '@iungo/sdk': {
            commonjs: '@iungo/sdk',
            commonjs2: '@iungo/sdk',
            amd: 'iungo',
            root: 'Iungo',
        },
        pubnub: {
            commonjs: 'pubnub',
            commonjs2: 'pubnub',
            amd: 'pubnub',
            root: 'PubNub',
        },
    },
});
