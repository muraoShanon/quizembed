import quizInfo from './quizInfoJson/quizinfo.json';
import {domApp, domAnswer, domChoice} from './domSettings';
import {createDiv} from './util';
import {answer} from './answer';

function selectChoice(choiceDom: HTMLElement) {
  if (document.getElementById(domAnswer.answerContainer.id)) return;

  const isCorrect = choiceDom.dataset.no ? check(choiceDom.dataset.no) : false;

  selectAction(choiceDom, isCorrect);
  selectAfterAction(isCorrect);

  document.getElementById(domApp.id)?.appendChild(answer(isCorrect));
}

function markSpan(idstring: string): HTMLElement {
  const span = document.createElement('span');
  span.id = idstring;

  return span;
}

function insertSpan(
  selectedChoice: HTMLElement,
  markIdString: string,
  addClassName: string
) {
  selectedChoice.insertBefore(
    markSpan(markIdString),
    selectedChoice.firstElementChild
  );
  selectedChoice.classList.add(addClassName);
}

function correctChoice(selectedChoice: HTMLElement): void {
  insertSpan(selectedChoice, domChoice.maru.id, domChoice.correct.className);
}

function wrongChoice(selectedChoice: HTMLElement): void {
  insertSpan(selectedChoice, domChoice.batu.id, domChoice.wrong.className);
}

export function check(selectNo: string): boolean {
  return selectNo === quizInfo.answer.correct.no;
}

export function selectAction(selectedChoice: HTMLElement, result: boolean) {
  if (result) {
    correctChoice(selectedChoice);
  } else {
    wrongChoice(selectedChoice);
  }
}

export function selectAfterAction(selectedRsult: boolean): void {
  const choices = document.getElementsByClassName(
    domChoice.choices.className
  ) as HTMLCollectionOf<HTMLElement>;

  Array.from(choices).forEach(choice => {
    choice.classList.add(domChoice.after.className);
    choice.classList.remove(domChoice.before.className);

    if (!selectedRsult && choice.dataset.no === quizInfo.answer.correct.no) {
      correctChoice(choice);
    }
  });
}

export function choices(): HTMLElement {
  const container = createDiv(
    domChoice.choiceContainer.id,
    domChoice.choiceContainer.className
  );

  quizInfo.choices.forEach(choice => {
    const cdom = createDiv(
      domChoice.choices.id + choice.no,
      `${domChoice.choices.className} ${domChoice.before.className}`
    );
    cdom.dataset.no = choice.no;

    const ctext = document.createElement('span');
    ctext.className = domChoice.text.className;
    ctext.textContent = choice.text;
    cdom.appendChild(ctext);

    cdom.onclick = function () {
      selectChoice(cdom);
    };
    container.appendChild(cdom);
  });

  return container;
}
