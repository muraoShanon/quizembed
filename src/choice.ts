import {createDiv} from './util';
import {answer} from './answer';
import {QuizInfo, DomSettings} from './types';

function selectChoice(
  choiceDom: HTMLElement,
  quizInfo: QuizInfo,
  domSettings: DomSettings,
  appRootDom: Element
) {
  if (
    appRootDom.querySelector(
      `.${domSettings.domAnswer.answerContainer.className}`
    ) ||
    !choiceDom.dataset.no
  ) {
    return;
  }

  const isCorrect = choiceDom.dataset.no
    ? check(choiceDom.dataset.no, quizInfo)
    : false;

  selectAction(choiceDom, isCorrect, domSettings);
  selectAfterAction(isCorrect, quizInfo, domSettings, appRootDom);

  appRootDom.appendChild(answer(isCorrect, quizInfo, domSettings));

  //callback
  if (quizInfo.callback) {
    quizInfo.callback(choiceDom.dataset.no, isCorrect);
  }
}

function correctChoice(
  selectedChoice: HTMLElement,
  domSettings: DomSettings
): void {
  selectedChoice.classList.add(domSettings.domChoice.correct.className);
}

function wrongChoice(
  selectedChoice: HTMLElement,
  domSettings: DomSettings
): void {
  selectedChoice.classList.add(domSettings.domChoice.wrong.className);
}

export function check(selectNo: string, quizInfo: QuizInfo): boolean {
  const correctNo = quizInfo.answer.correct.no;

  if (!Array.isArray(correctNo)) {
    return selectNo === quizInfo.answer.correct.no;
  } else {
    return correctNo.includes(selectNo);
  }
}

export function selectAction(
  selectedChoice: HTMLElement,
  result: boolean,
  domSettings: DomSettings
) {
  if (result) {
    correctChoice(selectedChoice, domSettings);
  } else {
    wrongChoice(selectedChoice, domSettings);
  }
}

export function selectAfterAction(
  selectedRsult: boolean,
  quizInfo: QuizInfo,
  domSettings: DomSettings,
  appRootDom: Element
): void {
  const choices = appRootDom.getElementsByClassName(
    domSettings.domChoice.choices.className
  ) as HTMLCollectionOf<HTMLElement>;

  Array.from(choices).forEach(choice => {
    choice.classList.add(domSettings.domChoice.after.className);
    choice.classList.remove(domSettings.domChoice.before.className);

    if (!selectedRsult && choice.dataset.no === quizInfo.answer.correct.no) {
      correctChoice(choice, domSettings);
    }
  });
}

export function choices(
  quizInfo: QuizInfo,
  domSettings: DomSettings,
  root: Element
): HTMLElement {
  const container = createDiv(domSettings.domChoice.choicesContainer.className);

  quizInfo.choices.forEach(choice => {
    const cdom = createDiv(
      `${domSettings.domChoice.choices.className} ${domSettings.domChoice.before.className}`
    );
    cdom.dataset.no = choice.no;

    const ctext = document.createElement('span');
    ctext.className = domSettings.domChoice.text.className;
    ctext.textContent = choice.text;
    cdom.appendChild(ctext);

    cdom.onclick = function () {
      selectChoice(cdom, quizInfo, domSettings, root);
    };
    container.appendChild(cdom);
  });

  return container;
}
