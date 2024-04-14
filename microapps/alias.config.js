const path = require("path");

const AliasConfig = {
    webpack: {
        "@ecommerce": path.resolve(
            __dirname,
            `./microapps/ecommerce/src`
        ),
        "@account": path.resolve(
            __dirname,
            `./microapps/account/src`
        ),
    },
};

module.exports = AliasConfig;
