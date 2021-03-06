const { resolve } = require('path');
module.exports = ({config}) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/],
        include: [
            resolve(__dirname, '../src'),
        ],
        use: [
            require.resolve('ts-loader'),
        ]
    });
    config.module.rules.push({
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.extensions.push('.scss');
    return config;
};
