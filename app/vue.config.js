module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/index.scss";`,
            },
        }
    }
}