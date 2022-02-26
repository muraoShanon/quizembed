import {quizInfo} from './testQuizInfoJson';
import {question} from '../src/question';
import {domQuestion} from '../src/domSettings';

describe('Question', () => {
  beforeAll(() => {
    document.body.innerHTML = `<div id="qtest"></div>`;
    document.getElementById('qtest')?.appendChild(question(quizInfo));
  });

  afterAll(() => {
    document.body.innerHTML = '';
  });

  test('Dom生成確認', () => {
    const questionContainer = document.getElementById(
      domQuestion.questionContainer.id
    );
    expect(questionContainer).toBeTruthy();

    const header = document.getElementById(domQuestion.header.id);
    expect(header).toBeTruthy();

    const qtext = document.getElementById(domQuestion.qtext.id);
    expect(qtext).toBeTruthy();

    const qimage = document.getElementById(domQuestion.qimage.id);
    expect(qimage).toBeTruthy();
  });

  test('ヘッダテキスト', () => {
    const header = document.getElementById(domQuestion.header.id);
    expect(header?.textContent).toBe(quizInfo.question.headerText);
  });

  test('設問テキスト', () => {
    const qtext = document.getElementById(domQuestion.qtext.id);
    expect(qtext?.textContent).toBe(quizInfo.question.qtext);
  });

  test('画像', () => {
    const qimage = document.getElementById(domQuestion.qimage.id);
    expect(qimage).toBeTruthy();
  });
});
