import webpackConfig from '../webpack.config';
import webpack, {Configuration} from 'webpack';
import {resolve} from 'path';
import {rejects} from 'assert';

interface BuildConfig extends Configuration {
  output: {
    path: string;
    filename: string;
  };
}

const buildConfig: BuildConfig = {
  mode: 'production',
  entry: resolve(__dirname, 'app.ts'),
  output: {
    path: '',
    filename: `quizembed.${new Date().getTime().toString(32)}.js`,
  },
};

function config(webpackConfiguration: BuildConfig): BuildConfig {
  return Object.assign({}, webpackConfig, webpackConfiguration, buildConfig);
}

export async function build(outputPath: string) {
  buildConfig.output.path = outputPath;
  const conf = config(buildConfig);

  return new Promise((resolve, reject) => {
    webpack(conf, error => {
      if (error) {
        console.error(error);
        return reject();
      }
      return resolve(buildConfig.output.filename);
    });
  });
}
