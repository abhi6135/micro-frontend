const path = require("path");

const AliasConfig = {
    webpack: {
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
