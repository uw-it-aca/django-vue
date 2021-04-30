const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DjangoBridgePlugin = require('django-webpack-bridge');

module.exports = (_env, options) => {
  if (!('VUE_DEVTOOLS' in process.env) || process.env.VUE_DEVTOOLS.length === 0) {
    process.env.VUE_DEVTOOLS = options.mode;
  }

  return {

    //context: __dirname,

    entry: {
        main: './app_name/static/app_name/vue/main.js'
    },

    optimization: {
        minimizer: [new TerserJSPlugin({})],
        splitChunks: {
          chunks: 'all',
        },
    },

    output: {
        path: '/static/app_name/',
        filename: "[name]-[contenthash].js",
        publicPath: '',
    },

    plugins: [
        new webpack.EnvironmentPlugin(['VUE_DEVTOOLS']),
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]-[contenthash].css",
        }),
        new DjangoBridgePlugin(),
    ],

    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
  };
} 
