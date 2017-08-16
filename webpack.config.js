//Will write logic to setup and configure webpack
//resolves path of application
var path = require('path');

//Dir that will serve the app
var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    //which file is the first file to start compiling
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath:"/app/"
    },
    module: {
        loaders:[
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader:"babel-loader",
                query: {
                    presets:["react", 'es2015', 'stage-2']
                }
            }
        ]
    }
};

module.exports = config;
