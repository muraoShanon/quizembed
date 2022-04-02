import {DomSettings, QuizInfo} from './types';
import {question} from './question';
import {choices} from './choice';
import {domSettings} from './domSettings';
import {createDiv} from './util';

export function embed(quizInfo: QuizInfo) {
  const root = document.querySelector(quizInfo.targetSelector);

  if (!root) return;

  const app = createDiv(domSettings.domApp.id, domSettings.domApp.className);
  app.appendChild(question(quizInfo, domSettings));
  app.appendChild(choices(quizInfo, domSettings, root));

  root.appendChild(app);
}
