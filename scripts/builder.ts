import {build} from '../src/build';
import {resolve} from 'path';

async function main() {
  const outputPath = resolve(__dirname, '../dist');
  const quizembedFileName = await build(outputPath);
  console.log(`output: ${outputPath}${quizembedFileName}`);
}

(async () => {
  await main();
  console.log('ファイルを出力しました');
})();
