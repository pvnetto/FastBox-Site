const webpack = require("webpack");
// Initialize doteenv library
require("dotenv").config();

module.exports = {
    env: {
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY
    }
};