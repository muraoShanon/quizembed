import {QuizInfo} from './quizinfo.type';
import {question} from './question';
import {choices} from './choice';
import {domApp} from './domSettings';

declare const QUIZINFO: QuizInfo;

function quizeEmbedApp() {
  const qc = document.createElement('div');
  qc.id = domApp.id;
  return qc;
}

export function quizembed(quizInfo: QuizInfo) {
  const root = document.getElementById('quizembed');

  if (!root) return;

  const app = quizeEmbedApp();
  app.appendChild(question(quizInfo));
  app.appendChild(choices(quizInfo));

  root.appendChild(app);
}

quizembed(QUIZINFO);
