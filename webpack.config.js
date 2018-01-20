module.exports = {
    entry: './scripts/index.js',
    output: {
        filename: './build/bundle.js'
    },
    module: {


        rules: [{
            test: /\.less$/,
            use: [


                {
                    loader: "style-loader" // creates style nodes from JS strings
                },
                {
                    // loader: "css-loader!less-loader",
                    loader: "css-loader" // translates CSS into CommonJS
                },
                {
                    // loader: "css-loader!less-loader",
                    loader: "less-loader" // compiles Less to CSS
                },


            ]
        },
        ],
    }
};
