const {build} = require('../build/src/index');
const {resolve} = require('path');
const {quizInfo} = require('../build/test/testQuizInfoJson');

async function main() {
  const outputPath = resolve(__dirname, '../dist');
  const quizembedFileName = await build(outputPath, quizInfo);

  console.log('outputpath:  ', outputPath);

  console.log(`output: ${outputPath}${quizembedFileName}`);
}

(async () => {
  await main();
  console.log('ファイルを出力しました');
})();
