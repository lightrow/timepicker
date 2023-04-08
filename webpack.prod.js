const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'rangepicker.js',
    path: `${process.cwd()}/dist`,
    library: 'RangePicker',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [{ loader: 'ts-loader' }],
      },
    ],
  },

  resolve: {
    extensions: ['.ts'],
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '' }],
    }),
  ],
};
