module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts"],
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  target: ["web", "es5"],
};