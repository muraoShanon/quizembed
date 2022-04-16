import {quizInfo} from './testQuizInfoJson';
import {domSettings} from '../src/domSettings';
import {choices, check, selectAction, selectAfterAction} from '../src/choice';
import {QuizInfo} from '../src/types';

describe('choice', () => {
  let root: Element;
  beforeEach(() => {
    const targetDomId = 'choice-test';
    document.body.innerHTML = `<div id=${targetDomId}></div>`;
    root = document.getElementById(targetDomId)!;
    root.appendChild(choices(quizInfo, domSettings, root));
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('choice:ContaierDom生成', () => {
    const choicesContaierDom = document.querySelector(
      `.${domSettings.domChoice.choicesContainer.className}`
    );
    expect(choicesContaierDom).toBeTruthy();
  });

  test('設問の生成', () => {
    const choicesDom = document.getElementsByClassName(
      domSettings.domChoice.choices.className
    );
    expect(choicesDom.length).toBe(quizInfo.choices.length);
  });

  test('答え合わせ:正解が一つ', () => {
    expect(check(quizInfo.answer.correct.no as string, quizInfo)).toBeTruthy();
  });

  test('答え合わせ：正解が複数', () => {
    const _quizInfo: QuizInfo = JSON.parse(JSON.stringify(quizInfo));
    const quizInfoMultiCorrect = Object.assign(_quizInfo, {
      answer: {correct: {no: ['1', '3'], msg: '複数正解'}},
    });

    for (const correctNo of quizInfoMultiCorrect.answer.correct.no) {
      expect(check(correctNo, quizInfoMultiCorrect)).toBeTruthy();
    }
  });

  test('選択肢選択:正解:selectAction', () => {
    const choices = document.getElementsByClassName(
      domSettings.domChoice.choices.className
    ) as HTMLCollectionOf<HTMLElement>;

    selectAction(choices[0], true, domSettings);

    // correctクラスの追加
    expect(choices[0].classList).toContain(
      domSettings.domChoice.correct.className
    );
  });

  test('選択肢選択:不正解:selectAction', () => {
    const choices = document.getElementsByClassName(
      domSettings.domChoice.choices.className
    ) as HTMLCollectionOf<HTMLElement>;

    selectAction(choices[0], false, domSettings);

    // wrongクラスの追加
    expect(choices[0].classList).toContain(
      domSettings.domChoice.wrong.className
    );
  });

  test('選択後の処理:selectAfterAction', () => {
    const choices = document.getElementsByClassName(
      domSettings.domChoice.choices.className
    ) as HTMLCollectionOf<HTMLElement>;

    selectAfterAction(true, quizInfo, domSettings, root);

    Array.from(choices).forEach(choice => {
      expect(
        choice.classList.contains(domSettings.domChoice.after.className)
      ).toBeTruthy();
      expect(
        choice.classList.contains(domSettings.domChoice.before.className)
      ).not.toBeTruthy();
    });
  });

  test('選択後の処理:正解は常に表示される:selectAfterAction', () => {
    selectAfterAction(false, quizInfo, domSettings, root);
    expect(
      document.querySelector(`.${domSettings.domChoice.correct.className}`)
    ).toBeTruthy();
  });
});
