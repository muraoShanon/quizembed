import quizinfo from '../src/quizInfoJson/quizinfo.json';
import {domAnswer} from '../src/domSettings';
import {answer} from '../src/answer';

describe('Answer', () => {
  describe('正解', () => {
    beforeAll(() => {
      const targetId = 'answer-target';
      document.body.innerHTML = `<div id=${targetId}></div>`;
      document.getElementById(targetId)?.appendChild(answer(true));
    });

    afterAll(() => {
      document.body.innerHTML = '';
    });

    test('結果のテキスト', () => {
      const resultText = document.getElementById(
        domAnswer.result.id
      )?.textContent;

      expect(resultText).toBe(quizinfo.answer.correct.msg);
    });

    test('正解タイトル', () => {
      const answerText = document.getElementById(
        domAnswer.answerText.id
      )?.textContent;

      expect(answerText).toBe(quizinfo.answer.answerText);
    });

    test('正解コメント', () => {
      const commentText = document.getElementById(
        domAnswer.comment.id
      )?.textContent;

      expect(commentText).toBe(quizinfo.answer.comment);
    });
  });

  describe('正解', () => {
    beforeAll(() => {
      const targetId = 'answer-target';
      document.body.innerHTML = `<div id=${targetId}></div>`;
      document.getElementById(targetId)?.appendChild(answer(false));
    });

    afterAll(() => {
      document.body.innerHTML = '';
    });

    test('結果のテキスト', () => {
      const resultText = document.getElementById(
        domAnswer.result.id
      )?.textContent;

      expect(resultText).toBe(quizinfo.answer.wrong.msg);
    });

    test('正解タイトル', () => {
      const answerText = document.getElementById(
        domAnswer.answerText.id
      )?.textContent;

      expect(answerText).toBe(quizinfo.answer.answerText);
    });

    test('正解コメント', () => {
      const commentText = document.getElementById(
        domAnswer.comment.id
      )?.textContent;

      expect(commentText).toBe(quizinfo.answer.comment);
    });
  });
});