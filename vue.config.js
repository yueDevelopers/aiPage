const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api/": {
        target: "http://182.92.121.134:5000/",
        changeOrigin: true,
        pathRewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
