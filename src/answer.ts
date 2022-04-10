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

function image(
  quizInfo: QuizInfo,
  domSettings: DomSettings
): HTMLElement | undefined {
  // console.log(quizInfo.answer);
  if (!quizInfo.answer.imagePath) return undefined;

  const imageContainer = createDiv(domSettings.domAnswer.image.className);
  const img = document.createElement('img');
  img.src = quizInfo.answer.imagePath;

  imageContainer.appendChild(img);

  return imageContainer;
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

  //画像?
  const img = image(quizInfo, domSettings);
  if (img) {
    container.appendChild(img);
  }

  return container;
}
