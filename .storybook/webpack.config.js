const path = require('path');

module.exports = ({ config, mode }) => {

    // Add twig support
    config.module.rules.push({
        test: /\.twig$/,
        loader: 'twigjs-loader',
    });

    // Tell Storybook where your components live
    config.resolve.alias['components'] = path.resolve(__dirname, '../templates/components/');

    // Add scss support
    config.module.rules.push({
        test: /\.scss$/,
        loaders: ['style-loader?singleton', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });

    return config;
};
