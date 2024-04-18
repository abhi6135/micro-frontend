const path = require("path");

const AliasConfig = {
    webpack: {
        "@container": path.resolve(
            __dirname,
            `./src`
        ),
        "@ecommerce": path.resolve(
            __dirname,
            `./ecommerce/src`
        ),
        "@account": path.resolve(
            __dirname,
            `./account/src`
        ),
    },
};

module.exports = AliasConfig;
