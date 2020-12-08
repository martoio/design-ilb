const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    library: "martoio-design-lib",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("babel-loader")
          }
        ]
      },
    ]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  }
};