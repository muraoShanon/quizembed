import {question} from './question';
import {choices} from './choice';
import {domApp} from './domSettings';

function quizeEmbedApp() {
  const qc = document.createElement('div');
  qc.id = domApp.id;
  return qc;
}

export function quizembed() {
  const root = document.getElementById('quizembed');

  if (!root) return;

  const app = quizeEmbedApp();
  app.appendChild(question());
  app.appendChild(choices());

  root.appendChild(app);
}

quizembed();
