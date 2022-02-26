import {domAnswer} from './domSettings';
import {createDiv} from './util';
import {QuizInfo} from './quizinfo.type';

function resultDiv(resultText: string): HTMLElement {
  return createDiv(domAnswer.result.id, domAnswer.result.className, resultText);
}

function anwerTitle(quizInfo: QuizInfo): HTMLElement {
  return createDiv(
    domAnswer.answerTitle.id,
    domAnswer.answerTitle.className,
    quizInfo.answer.answerTitle
  );
}

function comment(quizInfo: QuizInfo): HTMLElement {
  return createDiv(
    domAnswer.comment.id,
    domAnswer.comment.className,
    quizInfo.answer.comment
  );
}

export function answer(result: boolean, quizInfo: QuizInfo): HTMLElement {
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
  container.appendChild(anwerTitle(quizInfo));

  //解説
  container.appendChild(comment(quizInfo));

  return container;
}
