import {quizInfo} from './testQuizInfoJson';
import {domAnswer} from '../src/domSettings';
import {answer} from '../src/answer';

describe('Answer', () => {
  describe('正解', () => {
    beforeAll(() => {
      const targetId = 'answer-target';
      document.body.innerHTML = `<div id=${targetId}></div>`;
      document.getElementById(targetId)?.appendChild(answer(true, quizInfo));
    });

    afterAll(() => {
      document.body.innerHTML = '';
    });

    test('結果のテキスト', () => {
      const resultText = document.getElementById(
        domAnswer.result.id
      )?.textContent;

      expect(resultText).toBe(quizInfo.answer.correct.msg);
    });

    test('正解タイトル', () => {
      const answerText = document.getElementById(
        domAnswer.answerTitle.id
      )?.textContent;

      expect(answerText).toBe(quizInfo.answer.answerTitle);
    });

    test('正解コメント', () => {
      const commentText = document.getElementById(
        domAnswer.comment.id
      )?.textContent;

      expect(commentText).toBe(quizInfo.answer.comment);
    });
  });

  describe('正解', () => {
    beforeAll(() => {
      const targetId = 'answer-target';
      document.body.innerHTML = `<div id=${targetId}></div>`;
      document.getElementById(targetId)?.appendChild(answer(false, quizInfo));
    });

    afterAll(() => {
      document.body.innerHTML = '';
    });

    test('結果のテキスト', () => {
      const resultText = document.getElementById(
        domAnswer.result.id
      )?.textContent;

      expect(resultText).toBe(quizInfo.answer.wrong.msg);
    });

    test('正解タイトル', () => {
      const answerText = document.getElementById(
        domAnswer.answerTitle.id
      )?.textContent;

      expect(answerText).toBe(quizInfo.answer.answerTitle);
    });

    test('正解コメント', () => {
      const commentText = document.getElementById(
        domAnswer.comment.id
      )?.textContent;

      expect(commentText).toBe(quizInfo.answer.comment);
    });
  });
});
