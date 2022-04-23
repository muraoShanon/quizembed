import {quizInfo} from './testQuizInfoJson';
import {domSettings} from '../src/domSettings';
import {embed, embeDom} from '../src/app';

describe('app', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="quizembed"><div>';
  });

  afterAll(() => {
    document.body.innerHTML = '';
  });
  test('embed', () => {
    embed(quizInfo);
    const app = document.querySelector(`.${domSettings.domApp.className}`);
    expect(app).toBeTruthy();
  });

  test('embeDom', () => {
    const dom = embeDom(quizInfo);
    expect(dom.className).toBe(domSettings.domApp.className);
  });
});
