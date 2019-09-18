const path = require('path')

module.exports = ({ config, mode }) => {
    // Add twig support
    config.module.rules.push({
        test: /\.twig$/,
        loader: 'twigjs-loader',
    })

    // Tell Storybook where your components live
    config.resolve.alias['components'] = path.resolve(
        __dirname,
        '../templates/components/'
    )

    // Add scss support
    config.module.rules.push({
        test: /\.scss$/,
        use: [
            { loader: 'style-loader', options: { injectType: 'styleTag' } },
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
        ],
        include: path.resolve(__dirname, '../'),
    })

    return config
}
