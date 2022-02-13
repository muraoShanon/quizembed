import {resolve} from 'path';
import webpackConfig from '../webpack.config';
import webpack, {Configuration} from 'webpack';
import {createQuizInfoJson} from './quizInfoJson/createQuizInfoJson';
import {QuizInfo} from './quizInfoJson/quizinfo.type';

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
  const conf = config(buildConfig);

  //quizinfojsonの作成
  createQuizInfoJson(quizinfo);

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
