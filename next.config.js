// import webpack from "webpack";
// import dotenv from "dotenv";
const webpack = require('webpack')
const dotenv = require('dotenv')

const { parsed: myEnv } = dotenv.config({});

module.exports = {
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
        return config
    }
}