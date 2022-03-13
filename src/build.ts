import {resolve} from 'path';
import webpack, {Configuration, DefinePlugin} from 'webpack';
import {QuizInfo} from './quizinfo.type';

interface BuildConfig extends Configuration {
  output: {
    path: string;
    filename: string;
    library: string;
  };
}

const buildConfig: BuildConfig = {
  mode: 'production',
  entry: resolve(__dirname, 'app.js'),
  target: ['web', 'es5'],
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: '',
    filename: `quizembed.js`,
    library: 'quizembed',
  },
};

function config(webpackConfiguration: BuildConfig): BuildConfig {
  return Object.assign({}, webpackConfiguration, buildConfig);
}

export async function build(
  outputPath: string,
  quizinfo: QuizInfo
): Promise<string> {
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
        return reject('error');
      }
      return resolve(buildConfig.output.filename);
    });
  });
}
