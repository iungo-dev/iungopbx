const createConfig = require('@iungo/sdk-utils/webpack');
const path = require('path');

module.exports = createConfig({
    filename: 'iungo',
    entry: './src/SDK.ts',
    outputPath: path.resolve(__dirname, 'dist'),
    libraryName: 'SDK',
});
