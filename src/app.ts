import {DomSettings, QuizInfo} from './types';
import {question} from './question';
import {choices} from './choice';
import {domSettings} from './domSettings';
import {createDiv} from './util';

function idclasssuff(obj: {id?: string}, suffix: string) {
  if (obj.id) {
    obj.id = `${obj.id}${suffix}`;
  }
}

export function addSuffix(
  domSettings: DomSettings,
  suffix: string
): DomSettings {
  const _domSettings: DomSettings = JSON.parse(JSON.stringify(domSettings));

  return Object.fromEntries(
    Object.entries(_domSettings).map(entry => {
      const key = entry[0];
      const val = entry[1];
      if (key === 'domApp') {
        idclasssuff(val, suffix);
      } else {
        Object.entries(val).forEach(innerEntry => {
          idclasssuff(innerEntry[1] as {id?: string}, suffix);
        });
      }

      return entry;
    })
  ) as DomSettings;
}

export function embed(quizInfo: QuizInfo) {
  const suffix = quizInfo.suffix;
  const targetId = suffix ? `quizembed${suffix}` : 'quizembed';
  const domObj = suffix ? addSuffix(domSettings, suffix) : domSettings;

  const root = document.getElementById(targetId);

  if (!root) return;

  const app = createDiv(domObj.domApp.id, domObj.domApp.className);
  app.appendChild(question(quizInfo, domObj));
  app.appendChild(choices(quizInfo, domObj, root));

  root.appendChild(app);
}
