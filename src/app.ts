import {DomSettings, QuizInfo} from './types';
import {question} from './question';
import {choices} from './choice';
import {domSettings} from './domSettings';
import {createDiv} from './util';

export function embeDom(quizInfo: QuizInfo) {
  const app = createDiv(domSettings.domApp.className);
  app.appendChild(question(quizInfo, domSettings));
  app.appendChild(choices(quizInfo, domSettings, app));

  return app;
}

export function embed(quizInfo: QuizInfo) {
  const root = document.querySelector(quizInfo.targetSelector);
  if (!root) return;

  const app = embeDom(quizInfo);
  root.appendChild(app);
}
