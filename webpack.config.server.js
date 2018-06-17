const path = require('path');
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');

var options = {
    entry: {
        server: [path.join(__dirname, "src", "server.tsx")],
    },
    output: {
        path: path.join(__dirname, "www"),
        filename: '[name].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', ".jsx"]
    },
    target: 'node',
    externals: [nodeExternals()],
    optimization: {
        minimize: false
    },
    plugins: [
        new webpack.DefinePlugin({
            __dirname: '__dirname',
        }),
        // new AssetsPlugin({ filename: 'www/assets.json' }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [{
            test: /\.ts$|\.tsx$/,
            loader: 'ts-loader',
            options: {configFile: "tsconfig.server.json"}
        }]
    }
};

switch (process.env.NODE_ENV) {
    case "production":
        // options.output.filename = '[name].[chunkhash].min.js';
        break;
}

module.exports = options;