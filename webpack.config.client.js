const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin')
const assetsPluginInstance = new AssetsPlugin({
    path: path.join(__dirname, 'www')
});

module.exports = (env, argv) => {
    return {
        entry: {
            app: [path.join(__dirname, "src", "client.tsx")],
        },
        output: {
            path: path.join(__dirname, "www", "public", "build"),
            filename: argv.mode === "development" ? '[name].js' : '[name].[chunkhash].min.js',
            libraryTarget: 'umd',
            umdNamedDefine: true,
            publicPath: "/build/"
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx', ".jsx"]
        },
        plugins: argv.mode === "development" ? [] : [assetsPluginInstance],
        devtool: argv.mode === "development" ? "source-map" : undefined,
        module: {
            rules: [{
                    test: /\.ts$|\.tsx$/,
                    loader: "ifdef-loader",
                    options: {
                        version: 3,
                        env: argv.mode,
                        build: "web"
                    }
                },
                {
                    test: /\.ts$|\.tsx$/,
                    loader: "awesome-typescript-loader",
                    options: {
                        configFileName: "tsconfig.json"
                    }
                }
            ]
        }
    };
};


switch (process.env.NODE_ENV) {
    case "production":
        // options.output.filename = '[name].[chunkhash].min.js';
        break;
}