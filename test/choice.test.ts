import {quizInfo} from './testQuizInfoJson';
import {domChoice} from '../src/domSettings';
import {choices, check, selectAction, selectAfterAction} from '../src/choice';

describe('choice', () => {
  beforeEach(() => {
    const targetDomId = 'choice-test';
    document.body.innerHTML = `<div id=${targetDomId}></div>`;
    document.getElementById(targetDomId)?.appendChild(choices(quizInfo));
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('choice:ContaierDom生成', () => {
    const choicesContaierDom = document.getElementById(
      domChoice.choiceContainer.id
    );
    expect(choicesContaierDom).toBeTruthy();
  });

  test('設問の生成', () => {
    const choicesDom = document.getElementsByClassName(
      domChoice.choices.className
    );
    expect(choicesDom.length).toBe(quizInfo.choices.length);
  });

  test('設問文', () => {
    const idPrefix = domChoice.choices.id;

    quizInfo.choices.forEach(choice => {
      const text = document.getElementById(
        `${idPrefix}${choice.no}`
      )?.textContent;
      expect(text).toBe(choice.text);
    });
  });

  test('答え合わせ', () => {
    expect(check(quizInfo.answer.correct.no, quizInfo)).toBeTruthy();
  });

  test('選択肢選択:正解:selectAction', () => {
    const choices = document.getElementsByClassName(
      domChoice.choices.className
    ) as HTMLCollectionOf<HTMLElement>;

    selectAction(choices[0], true);

    // 丸オブジェクトの生成
    expect(document.getElementById(domChoice.maru.id)).toBeTruthy();

    // correctクラスの追加
    expect(choices[0].classList).toContain(domChoice.correct.className);
  });

  test('選択肢選択:不正解:selectAction', () => {
    const choices = document.getElementsByClassName(
      domChoice.choices.className
    ) as HTMLCollectionOf<HTMLElement>;

    selectAction(choices[0], false);

    // バツオブジェクトの生成
    expect(document.getElementById(domChoice.batu.id)).toBeTruthy();

    // wrongクラスの追加
    expect(choices[0].classList).toContain(domChoice.wrong.className);
  });

  test('選択後の処理:selectAfterAction', () => {
    const choices = document.getElementsByClassName(
      domChoice.choices.className
    ) as HTMLCollectionOf<HTMLElement>;

    selectAfterAction(true, quizInfo);

    Array.from(choices).forEach(choice => {
      expect(choice.classList.contains(domChoice.after.className)).toBeTruthy();
      expect(
        choice.classList.contains(domChoice.before.className)
      ).not.toBeTruthy();
    });
  });

  test('選択後の処理:正解は常に表示される:selectAfterAction', () => {
    selectAfterAction(false, quizInfo);
    expect(document.getElementById(domChoice.maru.id)).toBeTruthy();
  });
});
