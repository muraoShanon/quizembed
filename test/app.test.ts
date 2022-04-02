import {quizInfo} from './testQuizInfoJson';
import {domSettings} from '../src/domSettings';
import {embed} from '../src/app';

describe('app', () => {
  test('引数なし', () => {
    document.body.innerHTML = '<div id="quizembed"><div>';

    embed(quizInfo);
    const app = document.getElementById(domSettings.domApp.id);
    expect(app).toBeTruthy();
  });

  test('引数あり', () => {
    document.body.innerHTML = '<div id="quizembed"><div>';

    embed(quizInfo);
    const app = document.getElementById(domSettings.domApp.id);
    expect(app).toBeTruthy();
  });
});
