const path = require('path')
const webpack = require('webpack')

const SRC_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'dist')

const config = {
    devtool: 'cheap-module-source-map',
    entry: {
        main: `${SRC_DIR}/index.js`,
        vendor: ['react', 'semantic-ui-react', 'react-redux', 'reselect'],
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].entry.js',
        chunkFilename: '[id].chunk.js',
        publicPath: 'dist',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
        }, {
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader'],
        }, {
            test: /\.json$/,
            loaders: ['json-loader'],
        }],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'],
            filename: '[name].js',
        }),
    ],
}


if(process.env.NODE_ENV === 'production') {
    config.output.path = path.resolve(__dirname, 'dist')
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
            },
        }))
}

module.exports = config
