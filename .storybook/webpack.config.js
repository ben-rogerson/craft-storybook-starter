const path = require('path');
const webpack = require('webpack');

module.exports = ({ config, mode }) => {

    // Add twig support to Webpack
    config.module.rules.push({
        test: /\.twig$/,
        loader: 'twig-loader',
    });

    // SCSS support
    // You'll need to npm install the loaders
    // `npm install -D style-loader css-loader sass-loader`
    // Then import your .scss into the stories/XXXX.stories.js file

    // config.module.rules.push({
    //     test: /\.scss$/,
    //     loaders: ['style-loader', 'css-loader', 'sass-loader'],
    //     include: path.resolve(__dirname, '../'),
    // });

    // config.plugins = config.plugins.filter(
    //     plugin => !(plugin instanceof webpack.DefinePlugin)
    // );

    return config;
};
