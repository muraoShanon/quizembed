const {build} = require('../lib/index');
const {resolve} = require('path');

const quizInfo = {
  answer: {
    correct: {no: '1', msg: '正解です'},
    wrong: {msg: '不正解です'},
    title: '正解は:1番です',
    comment:
      'クイズの解説です\nクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説です',
  },
  question: {
    title: 'クイズです',
    comment:
      'なんでしょうか？\nなんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？',
    imagePath: './quizembed.exsample.png',
  },
  choices: [
    {no: '1', text: '選択肢1です'},
    {no: '2', text: '選択肢2です。'},
    {no: '3', text: '選択肢3です。'},
  ],
};

async function main() {
  const outputPath = resolve(__dirname, '../example');
  const quizembedFileName = await build(outputPath, quizInfo);

  console.log('outputpath:  ', outputPath);

  console.log(`output: ${outputPath}${quizembedFileName}`);
}

(async () => {
  await main();
  console.log('ファイルを出力しました');
})();
