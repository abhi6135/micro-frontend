const path = require("path");

const AliasConfig = {
    webpack: {
        "@container": path.resolve(
            __dirname,
            `./container-react/src`
        ),
    },
};

module.exports = AliasConfig;
