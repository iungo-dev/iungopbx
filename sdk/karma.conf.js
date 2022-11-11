const createConfig = require('@iungo/sdk-utils/karma');

module.exports = function(config) {
    config.set(createConfig(config, __dirname));
};
