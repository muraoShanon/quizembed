import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/webpack/index.ts',
  output: {
    path: `${__dirname}/dist`,
    filename: 'quizembed.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'browserslist',
};

export default config;
