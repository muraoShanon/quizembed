import quizInfo from './quizInfoJson/quizinfo.json';
import {domQuestion} from './domSettings';
import {createDiv} from './util';

function header(): HTMLElement {
  return createDiv(
    domQuestion.header.id,
    domQuestion.header.className,
    quizInfo.question.headerText
  );
}

function qText(): HTMLElement {
  return createDiv(
    domQuestion.qtext.id,
    domQuestion.qtext.className,
    quizInfo.question.qtext
  );
}

function qImage(): HTMLElement {
  const qidom = createDiv(domQuestion.qimage.id, domQuestion.qimage.className);

  const img = document.createElement('img');
  img.src = quizInfo.question.qimagePath;

  qidom.appendChild(img);

  return qidom;
}

export function question() {
  const qCol = createDiv(
    domQuestion.questionContainer.id,
    domQuestion.questionContainer.className
  );
  // ヘッダー
  qCol.appendChild(header());

  // 設問
  qCol.appendChild(qText());

  // 画像
  qCol.appendChild(qImage());

  return qCol;
}
