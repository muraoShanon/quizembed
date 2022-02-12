import quizInfo from './quizInfoJson/quizinfo.json';
import {domAnswer} from './domSettings';
import {createDiv} from './util';

function resultDiv(resultText: string): HTMLElement {
  return createDiv(domAnswer.result.id, domAnswer.result.className, resultText);
}

function anwerText(): HTMLElement {
  return createDiv(
    domAnswer.answerText.id,
    domAnswer.answerText.className,
    quizInfo.answer.answerText
  );
}

function comment(): HTMLElement {
  return createDiv(
    domAnswer.comment.id,
    domAnswer.comment.className,
    quizInfo.answer.comment
  );
}

export function answer(result: boolean): HTMLElement {
  const container = createDiv(
    domAnswer.answerContainer.id,
    domAnswer.answerContainer.className
  );

  // 結果
  if (result) {
    // 正解
    container.appendChild(resultDiv(quizInfo.answer.correct.msg));
  } else {
    //間違い
    container.appendChild(resultDiv(quizInfo.answer.wrong.msg));
  }

  // 正解の表示
  container.appendChild(anwerText());

  //解説
  container.appendChild(comment());

  return container;
}
