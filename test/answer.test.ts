import {quizInfo} from './testQuizInfoJson';
import {domSettings} from '../src/domSettings';
import {answer} from '../src/answer';

describe('Answer', () => {
  describe('正解', () => {
    beforeAll(() => {
      const targetId = 'answer-target';
      document.body.innerHTML = `<div id=${targetId}></div>`;
      document
        .getElementById(targetId)
        ?.appendChild(answer(true, quizInfo, domSettings));
    });

    afterAll(() => {
      document.body.innerHTML = '';
    });

    test('結果のテキスト', () => {
      const resultText = document.getElementById(
        domSettings.domAnswer.resultMsg.id
      )?.textContent;

      expect(resultText).toBe(quizInfo.answer.correct.msg);
    });

    test('正解タイトル', () => {
      const answerText = document.getElementById(
        domSettings.domAnswer.title.id
      )?.textContent;

      expect(answerText).toBe(quizInfo.answer.title);
    });

    test('正解コメント', () => {
      const commentText = document.getElementById(
        domSettings.domAnswer.comment.id
      )?.textContent;

      expect(commentText).toBe(quizInfo.answer.comment);
    });
  });

  describe('正解', () => {
    beforeAll(() => {
      const targetId = 'answer-target';
      document.body.innerHTML = `<div id=${targetId}></div>`;
      document
        .getElementById(targetId)
        ?.appendChild(answer(false, quizInfo, domSettings));
    });

    afterAll(() => {
      document.body.innerHTML = '';
    });

    test('結果のテキスト', () => {
      const resultText = document.getElementById(
        domSettings.domAnswer.resultMsg.id
      )?.textContent;

      expect(resultText).toBe(quizInfo.answer.wrong.msg);
    });

    test('正解タイトル', () => {
      const answerText = document.getElementById(
        domSettings.domAnswer.title.id
      )?.textContent;

      expect(answerText).toBe(quizInfo.answer.title);
    });

    test('正解コメント', () => {
      const commentText = document.getElementById(
        domSettings.domAnswer.comment.id
      )?.textContent;

      expect(commentText).toBe(quizInfo.answer.comment);
    });
  });
});
