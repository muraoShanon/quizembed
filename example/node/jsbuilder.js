const {json} = require('stream/consumers');
const {build} = require('../../lib/index');

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
    imagePath: '../quizembed.exsample.png',
  },
  choices: [
    {no: '1', text: '選択肢1です'},
    {no: '2', text: '選択肢2です。'},
    {no: '3', text: '選択肢3です。'},
  ],
};

async function main() {
  await build({
    output: {
      path: __dirname,
    },
    quizinfo: quizInfo,
  });

  const sufObj1 = JSON.parse(JSON.stringify(quizInfo));
  sufObj1.question.title = 'クイズです1';
  sufObj1.suffix = '_suffix1';
  await build({
    output: {path: __dirname, filename: 'quizembed_suffix1.js'},
    quizinfo: sufObj1,
  });

  const sufObj2 = JSON.parse(JSON.stringify(quizInfo));
  sufObj2.question.title = 'クイズです2';
  sufObj2.suffix = '_suffix2';
  await build({
    output: {path: __dirname, filename: 'quizembed_suffix2.js'},
    quizinfo: sufObj2,
  });
}

(async () => {
  await main();
  console.log('ファイルを出力しました');
})();
