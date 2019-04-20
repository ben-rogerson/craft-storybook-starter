const path = require('path');

module.exports = ({ config, mode }) => {

    // Add twig support
    config.module.rules.push({
        test: /\.twig$/,
        loader: 'twig-loader',
    });

    // Add scss support
    config.module.rules.push({
        test: /\.scss$/,
        loaders: ['style-loader?singleton', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });

    return config;
};
