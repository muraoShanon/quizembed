const {build} = require('../../lib/index');

const quizInfo = {
  targetSelector: '#quizembed',
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

  const obj1 = JSON.parse(JSON.stringify(quizInfo));
  obj1.targetSelector = '#quizembed1';
  obj1.question.title = 'クイズです1';
  await build({
    output: {path: __dirname, filename: 'quizembed_suffix1.js'},
    quizinfo: obj1,
  });

  const obj2 = JSON.parse(JSON.stringify(quizInfo));
  obj2.targetSelector = '#quizembed2';
  obj2.question.title = 'クイズです2';
  obj2.answer.correct.no = ['1', '3'];
  obj2.answer.title = '正解は1番と3番です';
  await build({
    output: {path: __dirname, filename: 'quizembed_suffix2.js'},
    quizinfo: obj2,
  });
}

(async () => {
  await main();
  console.log('ファイルを出力しました');
})();
