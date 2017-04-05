let webpack = require('webpack'),
    path = require('path'),
    envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log('Build Environment is: ', process.env.NODE_ENV);

try {
    if(process.env.NODE_ENV !== 'production') envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch(e) {
    console.error('EnvFile Load Fail.');
}

let pluginConfig;
if (process.env.NODE_ENV === 'production') {
    pluginConfig = [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.apiKey),
                AUTH_DOMAIN: JSON.stringify(process.env.authDomain),
                DB_URL: JSON.stringify(process.env.databaseURL),
                PROJECT_ID: JSON.stringify(process.env.projectId),
                STORAGE_BUCKET: JSON.stringify(process.env.storageBucket),
                SENDER_ID: JSON.stringify(process.env.messagingSenderId)
            }
        })
    ]
} else if (process.env.NODE_ENV === 'development') {
    pluginConfig = [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.API_KEY),
                AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
                DB_URL: JSON.stringify(process.env.DB_URL),
                PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
                STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
                SENDER_ID: JSON.stringify(process.env.SENDER_ID)
            }
        })
    ]
} else if (process.env.NODE_ENV === 'test') {
    pluginConfig = [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.API_KEY),
                AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
                DB_URL: JSON.stringify(process.env.DB_URL),
                PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
                STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
                SENDER_ID: JSON.stringify(process.env.SENDER_ID)
            }
        })
    ]
}

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: pluginConfig,
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/components',
            './app/api'
        ],
        alias: {
            app: 'app',
            applicationStyles: 'app/styles/app.scss'
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    sassLoader: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
        includePaths: [
          path.resolve(__dirname, './node_modules/foundation-sites/scss/util')
      ]
    },
    devtool: process.env.NODE_ENV === 'production' ? undefined : 'cheap-module-eval-source-map'
};