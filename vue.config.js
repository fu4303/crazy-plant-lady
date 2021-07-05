module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/crazyplantperson/" : "/",
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/main.scss";`,
      },
    },
  },
};
