import {domQuestion} from './domSettings';
import {QuizInfo} from './quizinfo.type';
import {createDiv} from './util';

function header(quizInfo: QuizInfo): HTMLElement {
  return createDiv(
    domQuestion.title.id,
    domQuestion.title.className,
    quizInfo.question.title
  );
}

function qText(quizInfo: QuizInfo): HTMLElement {
  return createDiv(
    domQuestion.comment.id,
    domQuestion.comment.className,
    quizInfo.question.comment
  );
}

function qImage(quizInfo: QuizInfo): HTMLElement {
  const qidom = createDiv(domQuestion.image.id, domQuestion.image.className);
  const img = document.createElement('img');
  img.src = quizInfo.question.imagePath;

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
