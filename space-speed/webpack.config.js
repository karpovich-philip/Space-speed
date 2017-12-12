module.exports = {
    entry:  "./js/common.js",
    output: {
        path: __dirname + "/dist",
        filename: "script.js"
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
}
