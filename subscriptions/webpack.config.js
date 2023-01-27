const createConfig = require('@iungopbx/sdk-utils/webpack');
const path = require('path');

module.exports = createConfig({
    filename: 'iungo-subscriptions',
    entry: './src/Subscriptions.ts',
    outputPath: path.resolve(__dirname, 'dist'),
    libraryName: 'Subscriptions',
    externals: {
        '@iungopbx/sdk': {
            commonjs: '@iungopbx/sdk',
            commonjs2: '@iungopbx/sdk',
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
