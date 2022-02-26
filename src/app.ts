import {QuizInfo} from './quizinfo.type';
import {question} from './question';
import {choices} from './choice';
import {domApp} from './domSettings';
import {createDiv} from './util';

declare const QUIZINFO: QuizInfo;

export function quizembed(quizInfo: QuizInfo) {
  const root = document.getElementById('quizembed');

  if (!root) return;

  const app = createDiv(domApp.id, domApp.className);
  app.appendChild(question(quizInfo));
  app.appendChild(choices(quizInfo));

  root.appendChild(app);
}

quizembed(QUIZINFO);
