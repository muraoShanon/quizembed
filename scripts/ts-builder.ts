import {build} from '../src/build';
import {resolve} from 'path';

async function main() {
  const outputPath = resolve(__dirname, '../dist');
  const quizembedFileName = await build(outputPath, {
    answer: {
      correct: {no: '1', msg: '正解です'},
      wrong: {msg: '不正解です'},
      answerTitle: '正解は:1番です',
      comment:
        'クイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説です',
    },
    question: {
      headerText: 'クイズです!',
      qtext:
        'なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？',
      qimagePath: './quizembed.exsample.png',
    },
    choices: [
      {no: '1', text: '選択肢1です'},
      {no: '2', text: '選択肢2です。'},
      {no: '3', text: '選択肢3です。'},
    ],
  });

  console.log('outputpath:  ', outputPath);

  console.log(`output: ${outputPath}${quizembedFileName}`);
}

(async () => {
  await main();
  console.log('ファイルを出力しました');
})();
