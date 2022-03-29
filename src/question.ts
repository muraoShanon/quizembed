import {DomSettings, QuizInfo} from './types';
import {createDiv} from './util';

function header(quizInfo: QuizInfo, domSettings: DomSettings): HTMLElement {
  return createDiv(
    domSettings.domQuestion.title.id,
    domSettings.domQuestion.title.className,
    quizInfo.question.title
  );
}

function qText(quizInfo: QuizInfo, domSettings: DomSettings): HTMLElement {
  return createDiv(
    domSettings.domQuestion.comment.id,
    domSettings.domQuestion.comment.className,
    quizInfo.question.comment
  );
}

function qImage(quizInfo: QuizInfo, domSettings: DomSettings): HTMLElement {
  const qidom = createDiv(
    domSettings.domQuestion.image.id,
    domSettings.domQuestion.image.className
  );
  const img = document.createElement('img');
  img.src = quizInfo.question.imagePath;

  qidom.appendChild(img);

  return qidom;
}

export function question(quizInfo: QuizInfo, domSettings: DomSettings) {
  const qCol = createDiv(
    domSettings.domQuestion.questionContainer.id,
    domSettings.domQuestion.questionContainer.className
  );
  // ヘッダー
  qCol.appendChild(header(quizInfo, domSettings));

  // 設問
  qCol.appendChild(qText(quizInfo, domSettings));

  // 画像
  qCol.appendChild(qImage(quizInfo, domSettings));

  return qCol;
}
