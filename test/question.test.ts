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
    const questionContainer = document.getElementById(
      domSettings.domQuestion.questionContainer.id
    );
    expect(questionContainer).toBeTruthy();

    const header = document.getElementById(domSettings.domQuestion.title.id);
    expect(header).toBeTruthy();

    const qtext = document.getElementById(domSettings.domQuestion.comment.id);
    expect(qtext).toBeTruthy();

    const qimage = document.getElementById(domSettings.domQuestion.image.id);
    expect(qimage).toBeTruthy();
  });

  test('ヘッダテキスト', () => {
    const header = document.getElementById(domSettings.domQuestion.title.id);
    expect(header?.textContent).toBe(quizInfo.question.title);
  });

  test('設問テキスト', () => {
    const qtext = document.getElementById(domSettings.domQuestion.comment.id);
    expect(qtext?.textContent).toBe(quizInfo.question.comment);
  });

  test('画像', () => {
    const qimage = document.getElementById(domSettings.domQuestion.image.id);
    expect(qimage).toBeTruthy();
  });
});
