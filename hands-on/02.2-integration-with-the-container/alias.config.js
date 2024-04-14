const path = require("path");

const AliasConfig = {
    webpack: {
        "@container": path.resolve(
            __dirname,
            `./container-react/src`
        ),
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
