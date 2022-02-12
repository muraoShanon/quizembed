import webpack from 'webpack';
import {resolve} from 'path';

async function build() {
  const entry = resolve(__dirname, 'index.ts');
  const output = {
    path: resolve(__dirname, '../dist'),
    filename: `quizembed.${new Date().getTime().toString(32)}.js`,
  };

  return new Promise(resolve => {
    webpack(
      {
        mode: 'production',
        entry: entry,
        output: {
          path: output.path,
          filename: output.filename,
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
      },

      error => {
        if (error) return resolve(false);
        console.log('webpack done!');
        resolve(true);
      }
    );
  });
}
(async () => {
  await build();
  console.log('ファイルを出力しました');
})();
