const path = require("path");

const AliasConfig = {
    webpack: {
        "@container": path.resolve(
            __dirname,
            `./src`
        ),
    },
};

module.exports = AliasConfig;
