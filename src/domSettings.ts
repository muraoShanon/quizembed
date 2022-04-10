import {DomSettings} from './types';

const domApp = {
  className: 'quizembed-app',
};

const domQuestion = {
  questionContainer: {
    className: 'quizembed-question-questioncontainer',
  },
  title: {
    className: 'quizembed-question-title',
  },
  comment: {
    className: 'quizembed-question-comment',
  },
  image: {
    className: 'quizembed-question-image',
  },
};

const domChoice = {
  choicesContainer: {
    className: 'quizembed-choices-choicecontainer',
  },

  choices: {
    className: 'quizembed-choices-choices',
  },

  after: {
    className: 'after-quizembed-choices-choices',
  },

  before: {
    className: 'before-quizembed-choices-choices',
  },

  correct: {
    className: 'quizembed-choices-correct',
  },

  wrong: {
    className: 'quizembed-choices-wrong',
  },

  text: {
    className: 'quizembed-choices-choices-text',
  },

  maru: {
    className: 'quizembed-choices-maru',
  },

  batu: {
    className: 'quizembed-choices-batu',
  },
};

const domAnswer = {
  answerContainer: {
    className: 'quizembed-answer-answercontainer',
  },
  resultMsg: {
    className: 'quizembed-answer-result-msg',
  },
  title: {
    className: 'quizembed-answer-title',
  },
  comment: {
    className: 'quizembed-answer-comment',
  },
};

export const domSettings: DomSettings = {
  domApp,
  domAnswer,
  domQuestion,
  domChoice,
};
