import {quizInfo} from './testQuizInfoJson';
import {question} from '../src/question';
import {domSettings} from '../src/domSettings';

describe('Question', () => {
  beforeAll(() => {
    document.body.innerHTML = `<div id="qtest"></div>`;
    document
      .getElementById('qtest')
      ?.appendChild(question(quizInfo, domSettings));
  });

  afterAll(() => {
    document.body.innerHTML = '';
  });

  test('Dom生成確認', () => {
    const questionContainer = document.querySelector(
      `.${domSettings.domQuestion.questionContainer.className}`
    );
    expect(questionContainer).toBeTruthy();

    const header = document.querySelector(
      `.${domSettings.domQuestion.title.className}`
    );
    expect(header).toBeTruthy();

    const qtext = document.querySelector(
      `.${domSettings.domQuestion.comment.className}`
    );
    expect(qtext).toBeTruthy();

    const qimage = document.querySelector(
      `.${domSettings.domQuestion.image.className}`
    );
    expect(qimage).toBeTruthy();
  });

  test('ヘッダテキスト', () => {
    const header = document.querySelector(
      `.${domSettings.domQuestion.title.className}`
    );
    expect(header?.textContent).toBe(quizInfo.question.title);
  });

  test('設問テキスト', () => {
    const qtext = document.querySelector(
      `.${domSettings.domQuestion.comment.className}`
    );
    expect(qtext?.textContent).toBe(quizInfo.question.comment);
  });

  test('画像', () => {
    const qimage = document.querySelector(
      `.${domSettings.domQuestion.image.className}`
    );
    expect(qimage).toBeTruthy();
  });
});
