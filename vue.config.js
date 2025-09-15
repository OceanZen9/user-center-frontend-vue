require("ts-node").register();
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    setupMiddlewares: (middlewares, devServer) => {
      if (process.env.NODE_ENV === "development") {
        require("./src/mock");
      }
      return middlewares;
    },
  },
});
