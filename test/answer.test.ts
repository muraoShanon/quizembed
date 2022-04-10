import {quizInfo} from './testQuizInfoJson';
import {domSettings} from '../src/domSettings';
import {answer} from '../src/answer';

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
    const resultText = document.querySelector(
      `.${domSettings.domAnswer.resultMsg.className}`
    )?.textContent;

    expect(resultText).toBe(quizInfo.answer.correct.msg);
  });

  test('結果のテキスト：不正解', () => {
    document.body.innerHTML = '';
    document.body.innerHTML = `<div id=${targetId}></div>`;
    document
      .getElementById(targetId)
      ?.appendChild(answer(false, quizInfo, domSettings));

    const resultText = document.querySelector(
      `.${domSettings.domAnswer.resultMsg.className}`
    )?.textContent;

    expect(resultText).toBe(quizInfo.answer.wrong.msg);
  });

  test('タイトル', () => {
    const answerText = document.querySelector(
      `.${domSettings.domAnswer.title.className}`
    )?.textContent;

    expect(answerText).toBe(quizInfo.answer.title);
  });

  test('コメント', () => {
    const commentText = document.querySelector(
      `.${domSettings.domAnswer.comment.className}`
    )?.textContent;

    expect(commentText).toBe(quizInfo.answer.comment);
  });
});
