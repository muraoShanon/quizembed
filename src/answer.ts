import {createDiv} from './util';
import {QuizInfo, DomSettings} from './types';

function resultDiv(resultText: string, domSettings: DomSettings): HTMLElement {
  return createDiv(domSettings.domAnswer.resultMsg.className, resultText);
}

function anwerTitle(quizInfo: QuizInfo, domSettings: DomSettings): HTMLElement {
  return createDiv(
    domSettings.domAnswer.title.className,
    quizInfo.answer.title
  );
}

function comment(quizInfo: QuizInfo, domSettings: DomSettings): HTMLElement {
  return createDiv(
    domSettings.domAnswer.comment.className,
    quizInfo.answer.comment
  );
}

export function answer(
  result: boolean,
  quizInfo: QuizInfo,
  domSettings: DomSettings
): HTMLElement {
  const container = createDiv(domSettings.domAnswer.answerContainer.className);

  // 結果
  if (result) {
    // 正解
    container.appendChild(resultDiv(quizInfo.answer.correct.msg, domSettings));
  } else {
    //間違い
    container.appendChild(resultDiv(quizInfo.answer.wrong.msg, domSettings));
  }

  // 正解の表示
  container.appendChild(anwerTitle(quizInfo, domSettings));

  //解説
  container.appendChild(comment(quizInfo, domSettings));

  return container;
}
