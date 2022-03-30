import {DomSettings} from './types';

const domApp = {
  id: 'quizembed-app',
  className: 'quizembed-app',
};

const domQuestion = {
  questionContainer: {
    id: 'quizembed-question-questioncontainer',
    className: 'quizembed-question-questioncontainer',
  },
  title: {
    id: 'quizembed-question-title',
    className: 'quizembed-question-title',
  },
  comment: {
    id: 'quizembed-question-comment',
    className: 'quizembed-question-comment',
  },
  image: {
    id: 'quizembed-question-image',
    className: 'quizembed-question-image',
  },
};

const domChoice = {
  choicesContainer: {
    id: 'quizembed-choices-choicecontainer',
    className: 'quizembed-choices-choicecontainer',
  },

  choices: {
    id: 'quizembed-choices-choices',
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
    id: 'quizembed-choices-maru',
    className: 'quizembed-choices-maru',
  },

  batu: {
    id: 'quizembed-choices-batu',
    className: 'quizembed-choices-batu',
  },
};

const domAnswer = {
  answerContainer: {
    id: 'quizembed-answer-answercontainer',
    className: 'quizembed-answer-answercontainer',
  },
  resultMsg: {
    id: 'quizembed-answer-result-msg',
    className: 'quizembed-answer-result-msg',
  },
  title: {
    id: 'quizembed-answer-title',
    className: 'quizembed-answer-title',
  },
  comment: {
    id: 'quizembed-answer-comment',
    className: 'quizembed-answer-comment',
  },
};

export const domSettings: DomSettings = {
  domApp,
  domAnswer,
  domQuestion,
  domChoice,
};
