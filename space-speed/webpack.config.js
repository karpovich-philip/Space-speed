module.exports = {
    entry:  "./js/common.js",
    output: {
        path: __dirname + "/space-speed",
        filename: "index.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
}
