module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "rangepicker.js",
    path: `${process.cwd()}/dist`,
    library: "RangePicker",
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: `${process.cwd()}/dist`,
    compress: true,
    port: 3001,
  },
  watch: true,
  module: {
    // Use `ts-loader` on any file that ends in '.ts'
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: "ts-loader" }],
      },
    ],
  },
  // Bundle '.ts' files as well as '.js' files.
  resolve: {
    extensions: [".ts"],
  },
};
