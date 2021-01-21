module.exports = {
    plugins: [
        require('autoprefixer'),
        require('@hail2u/css-mqpacker'),
        require('cssnano')({
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true,
                    }
                }
            ]
        })
    ]
}