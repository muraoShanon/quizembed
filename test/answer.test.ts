import {quizInfo} from './testQuizInfoJson';
import {domSettings} from '../src/domSettings';
import {answer} from '../src/answer';
import {QuizInfo} from '../src/types';

describe('Answer', () => {
  const targetId = 'answer-target';
  beforeAll(() => {
    document.body.innerHTML = `<div id=${targetId}></div>`;
    document
      .getElementById(targetId)
      ?.appendChild(answer(true, quizInfo, domSettings));
  });

  afterAll(() => {
    document.body.innerHTML = '';
  });

  test('結果のテキスト：正解', () => {
    const correctMsg = document.querySelector(
      `.${domSettings.domAnswer.resultMsg.className}`
    )?.textContent;

    expect(correctMsg).toBe(quizInfo.answer.correct.msg);
  });

  test('結果のテキスト：不正解', () => {
    document.body.innerHTML = '';
    document.body.innerHTML = `<div id=${targetId}></div>`;
    document
      .getElementById(targetId)
      ?.appendChild(answer(false, quizInfo, domSettings));

    const wrongMsg = document.querySelector(
      `.${domSettings.domAnswer.resultMsg.className}`
    )?.textContent;

    expect(wrongMsg).toBe(quizInfo.answer.wrong.msg);
  });

  test('タイトル', () => {
    const title = document.querySelector(
      `.${domSettings.domAnswer.title.className}`
    )?.textContent;

    expect(title).toBe(quizInfo.answer.title);
  });

  test('コメント', () => {
    const comment = document.querySelector(
      `.${domSettings.domAnswer.comment.className}`
    )?.textContent;

    expect(comment).toBe(quizInfo.answer.comment);
  });

  test('画像?', () => {
    const _quizInfo: QuizInfo = JSON.parse(JSON.stringify(quizInfo));
    _quizInfo.answer.imagePath = './null.png';

    document.body.innerHTML = '';
    document.body.innerHTML = `<div id=${targetId}></div>`;
    document
      .getElementById(targetId)
      ?.appendChild(answer(true, _quizInfo, domSettings));

    const image = document.querySelector(
      `.${domSettings.domAnswer.image.className}`
    );

    expect(image).toBeTruthy();
  });
});
