import {resolve} from 'path';
import webpackConfig from '../webpack.config';
import webpack, {Configuration, DefinePlugin} from 'webpack';
import {QuizInfo} from './quizinfo.type';

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

export async function build(outputPath: string, quizinfo: QuizInfo) {
  buildConfig.output.path = outputPath;
  buildConfig.plugins = [
    new DefinePlugin({
      QUIZINFO: JSON.stringify(quizinfo),
    }),
  ];

  const conf = config(buildConfig);

  return new Promise((resolve, reject) => {
    webpack(conf, error => {
      if (error) {
        console.error(error);
        return reject();
      }
      console.log(buildConfig.output.filename, 'koredate');
      return resolve(buildConfig.output.filename);
    });
  });
}
