import {promises as fs} from 'fs';
import {resolve} from 'path';
import {createQuizInfoJson} from './createQuizInfoJson';

async function exists(filepath: string) {
  try {
    return await fs.lstat(filepath);
  } catch {
    return false;
  }
}

test('jsonファイルの生成', async () => {
  const jsonpath = resolve(__dirname, 'quizinfo.json');
  // ファイルの削除
  if (await exists(jsonpath)) {
    await fs.unlink(jsonpath);
  }

  await createQuizInfoJson({
    answer: {
      correct: {
        no: '1',
        msg: '正解です',
      },
      wrong: {
        msg: '不正解です',
      },
      answerText: '正解は:1番です',
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

  expect(await fs.lstat(jsonpath)).toBeTruthy();
});
