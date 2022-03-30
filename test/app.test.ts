import {quizInfo} from './testQuizInfoJson';
import {domSettings} from '../src/domSettings';
import {embed, addSuffix} from '../src/app';
import {DomSettings} from '../src/types';

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

  test('addSuffix', () => {
    const suffString = '_testSuf';
    const sufobj = addSuffix(domSettings, suffString);

    expect(sufobj.domApp.id).toBe(`${domSettings.domApp.id}${suffString}`);
    expect(sufobj.domAnswer.comment.className).toBe(
      `${domSettings.domAnswer.comment.className}`
    );
    expect(sufobj.domChoice.choices.id).toBe(
      `${domSettings.domChoice.choices.id}${suffString}`
    );
  });

  test('suffix有り', () => {
    const suffString = '_testSuf';
    const sufObj = JSON.parse(JSON.stringify(quizInfo));
    sufObj.suffix = suffString;

    document.body.innerHTML = `<div id="quizembed${suffString}"><div>`;

    embed(sufObj);
    const app = document.getElementById(
      `${domSettings.domApp.id}${suffString}`
    );
    expect(app).toBeTruthy();
  });
});
