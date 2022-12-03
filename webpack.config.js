const {GenerateSW} = require('workbox-webpack-plugin');

module.exports = {
    // Other webpack config...
    plugins: [
      // Other plugins...
        new GenerateSW({
            // These are some common options, and not all are required.
            // Consult the docs for more info.
            clientsClaim: true,
            skipWaiting: true,
        })
    ]
};