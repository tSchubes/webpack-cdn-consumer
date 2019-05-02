const path = require('path');
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {

    entry: {
        app: path.resolve(__dirname, 'src/app.js')
    },

    output: {
        path: path.resolve(__dirname, './build'),
    },

    devtool: false,

    plugins: [
        new ManifestPlugin({
            fileName: 'webpack-manifest.json'
        }),
        new DynamicCdnWebpackPlugin({
            only: ['lodash'],
            verbose: true,
            resolver: (packageName, version, options) => {
                if (packageName == 'lodash') {
                    return {
                        name: packageName,
                        //url: '../node_modules/lodash.js',
                        url: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js',
                        version: version,
                        var: '_'
                    };
                }
                return null;
            }
        })
    ]

};
