import {domQuestion} from './domSettings';
import {QuizInfo} from './quizInfoJson/quizinfo.type';
import {createDiv} from './util';

function header(quizInfo: QuizInfo): HTMLElement {
  return createDiv(
    domQuestion.header.id,
    domQuestion.header.className,
    quizInfo.question.headerText
  );
}

function qText(quizInfo: QuizInfo): HTMLElement {
  return createDiv(
    domQuestion.qtext.id,
    domQuestion.qtext.className,
    quizInfo.question.qtext
  );
}

function qImage(quizInfo: QuizInfo): HTMLElement {
  const qidom = createDiv(domQuestion.qimage.id, domQuestion.qimage.className);
  const img = document.createElement('img');
  img.src = quizInfo.question.qimagePath;

  qidom.appendChild(img);

  return qidom;
}

export function question(quizInfo: QuizInfo) {
  const qCol = createDiv(
    domQuestion.questionContainer.id,
    domQuestion.questionContainer.className
  );
  // ヘッダー
  qCol.appendChild(header(quizInfo));

  // 設問
  qCol.appendChild(qText(quizInfo));

  // 画像
  qCol.appendChild(qImage(quizInfo));

  return qCol;
}
