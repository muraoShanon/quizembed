export interface DomSettings extends Object {
  domApp: {
    className: string;
  };
  domQuestion: {
    questionContainer: {
      className: string;
    };
    title: {
      className: string;
    };
    comment: {
      className: string;
    };
    image: {
      className: string;
    };
  };
  domChoice: {
    choicesContainer: {
      className: string;
    };

    choices: {
      className: string;
    };

    after: {
      className: string;
    };

    before: {
      className: string;
    };

    correct: {
      className: string;
    };

    wrong: {
      className: string;
    };

    text: {
      className: string;
    };

    maru: {
      className: string;
    };

    batu: {
      className: string;
    };
  };
  domAnswer: {
    answerContainer: {
      className: string;
    };
    resultMsg: {
      className: string;
    };
    title: {
      className: string;
    };
    comment: {
      className: string;
    };
  };
}

interface Choice {
  no: string;
  text: string;
}

export interface QuizInfo {
  targetSelector: string;
  question: {
    title: string;
    comment: string;
    imagePath: string;
  };
  choices: Choice[];
  answer: {
    correct: {
      no: string;
      msg: string;
    };
    wrong: {
      msg: string;
    };
    title: string;
    comment: string;
  };
}
