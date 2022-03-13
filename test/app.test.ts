import {quizInfo} from './testQuizInfoJson';
import {domApp} from '../src/domSettings';
import {quizembed} from '../src/app';

describe('app', () => {
  test('引数なし', () => {
    document.body.innerHTML = '<div id="quizembed"><div>';

    quizembed();
    const app = document.getElementById(domApp.id);
    expect(app).toBeTruthy();
  });

  test('引数あり', () => {
    document.body.innerHTML = '<div id="quizembed"><div>';

    quizembed(quizInfo);
    const app = document.getElementById(domApp.id);
    expect(app).toBeTruthy();
  });
});
