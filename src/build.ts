import {resolve} from 'path';
import webpack, {Configuration, DefinePlugin} from 'webpack';
import {QuizInfo} from './types';

interface BuildArg {
  output: {path: string; filename?: string};
  quizinfo: QuizInfo;
}

const defaultConfig: Configuration = {
  mode: 'production',
  entry: resolve(__dirname, 'buildapp.js'),
  target: ['web', 'es5'],
  resolve: {
    extensions: ['.js'],
  },
};

function config(argConf: Configuration): Configuration {
  return Object.assign({}, defaultConfig, argConf);
}

export async function build(buildArg: BuildArg): Promise<boolean> {
  const {output, quizinfo} = buildArg;

  const conf: Configuration = {
    output: {
      path: output.path,
      filename: output.filename ? output.filename : 'quizembed.js',
    },
    plugins: [
      new DefinePlugin({
        QUIZINFO: JSON.stringify(quizinfo),
      }),
    ],
  };

  return new Promise((resolve, reject) => {
    webpack(config(conf), error => {
      if (error) {
        console.error(error);
        return reject(false);
      }
      return resolve(true);
    });
  });
}
