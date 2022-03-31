import {quizInfo} from './testQuizInfoJson';
import {domSettings} from '../src/domSettings';
import {choices, check, selectAction, selectAfterAction} from '../src/choice';

describe('choice', () => {
  beforeEach(() => {
    const targetDomId = 'choice-test';
    document.body.innerHTML = `<div id=${targetDomId}></div>`;

    const root = document.getElementById(targetDomId)!;

    root.appendChild(choices(quizInfo, domSettings, root));
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('choice:ContaierDom生成', () => {
    const choicesContaierDom = document.getElementById(
      domSettings.domChoice.choicesContainer.id
    );
    expect(choicesContaierDom).toBeTruthy();
  });

  test('設問の生成', () => {
    const choicesDom = document.getElementsByClassName(
      domSettings.domChoice.choices.className
    );
    expect(choicesDom.length).toBe(quizInfo.choices.length);
  });

  test('設問文', () => {
    const idPrefix = domSettings.domChoice.choices.id;

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
      domSettings.domChoice.choices.className
    ) as HTMLCollectionOf<HTMLElement>;

    selectAction(choices[0], true, domSettings);

    // 丸オブジェクトの生成
    expect(document.getElementById(domSettings.domChoice.maru.id)).toBeTruthy();

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

    // バツオブジェクトの生成
    expect(document.getElementById(domSettings.domChoice.batu.id)).toBeTruthy();

    // wrongクラスの追加
    expect(choices[0].classList).toContain(
      domSettings.domChoice.wrong.className
    );
  });

  test('選択後の処理:selectAfterAction', () => {
    const choices = document.getElementsByClassName(
      domSettings.domChoice.choices.className
    ) as HTMLCollectionOf<HTMLElement>;

    const targetDomId = 'choice-test';
    const root = document.getElementById(targetDomId)!;

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
    const targetDomId = 'choice-test';
    const root = document.getElementById(targetDomId)!;
    selectAfterAction(false, quizInfo, domSettings, root);
    expect(document.getElementById(domSettings.domChoice.maru.id)).toBeTruthy();
  });
});
