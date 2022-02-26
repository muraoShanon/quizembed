/*
 * @jest-environment node
 */
const {resolve} = require('path');
const fs = require('fs').promises;

describe('/build/build', () => {
  const outputPaths = [];

  afterEach(() => {
    outputPaths.forEach(async filepath => {
      await fs.unlink(filepath);
    });
  });

  test('build', async () => {
    const {build} = require('../build/src/build');
    const outputDir = resolve(__dirname, '../dist/');
    const quizembedFileName = await build(outputDir, {
      answer: {
        correct: {
          no: '1',
          msg: '正解です',
        },
        wrong: {
          msg: '不正解です',
        },
        answerTitle: '正解は:1番です',
        comment:
          'クイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説です',
      },
      question: {
        headerText: 'クイズです',
        qtext:
          'なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？',
        qimagePath: './onigarayaki.jpg',
      },
      choices: [
        {no: '1', text: '選択肢1です'},
        {no: '2', text: '選択肢2です。'},
        {no: '3', text: '選択肢3です。'},
      ],
    });
    const fileFullPath = `${outputDir}/${quizembedFileName}`;
    outputPaths.push(fileFullPath);
  });
}, 2500);
