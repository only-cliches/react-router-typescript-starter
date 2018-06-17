const path = require('path');
const webpack = require("webpack");

var options = {
    entry: {
        app: [path.join(__dirname, "src", "client.tsx")],
    },
    output: {
        path: path.join(__dirname, "www", "public"),
        filename: '[name].js',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', ".jsx"]
    },
    plugins: [
        // new AssetsPlugin({ filename: 'www/assets.json' }),
        // new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        contentBase: "www/public"
    },
    module: {
        rules: [{
            test: /\.ts$|\.tsx$/,
            loader: 'ts-loader'
        }]
    }
};

switch (process.env.NODE_ENV) {
    case "production":
        // options.output.filename = '[name].[chunkhash].min.js';
        break;
}

module.exports = options;
