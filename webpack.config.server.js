const path = require('path');
const webpack = require("webpack");
const nodeExternals = require('webpack-node-externals');


/*
switch (argv.mode.WEBPACK_MODE) {
    case "production":
        // options.output.filename = '[name].[chunkhash].min.js';
        break;
}
*/

module.exports = (env, argv) => {

    return {
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
        devtool: argv.mode === "development" ? "source-map" : undefined,
        module: {
            rules: [
                {
                    test: /\.ts$|\.tsx$/,
                    loader: "ifdef-loader",
                    options: {version: 3, env: argv.mode, build: "node"}
                },
                {
                    test: /\.ts$|\.tsx$/,
                    loader: "awesome-typescript-loader",
                    options: {
                        configFileName: "tsconfig.server.json"
                    }
                }
            ]
        }
    };
}