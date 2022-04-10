/*
 * @jest-environment node
 */
const fs = require('fs').promises;
const fsync = require('fs');

describe('buildテスト', () => {
  const outputPaths = [];

  afterEach(() => {
    outputPaths.forEach(async filepath => {
      await fs.unlink(filepath);
    });
  });

  test('build', async () => {
    const {build} = require('../lib/index');
    const filename = 'quiztest.js';

    await build({
      output: {
        path: __dirname,
        filename: filename,
      },
      quizinfo: {
        targetSelector: '#quizembed',
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
      },
    });

    const fileFullPath = `${__dirname}/${filename}`;
    outputPaths.push(fileFullPath);

    expect(fsync.existsSync(fileFullPath)).toBeTruthy();
  });
}, 2500);
