import {quizInfo} from './testQuizInfoJson';
import {domSettings} from '../src/domSettings';
import {embed} from '../src/app';

describe('app', () => {
  test('引数なし', () => {
    document.body.innerHTML = '<div id="quizembed"><div>';

    embed(quizInfo);
    const app = document.querySelector(`.${domSettings.domApp.className}`);
    expect(app).toBeTruthy();
  });
});
