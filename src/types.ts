export interface DomSettings extends Object {
  domApp: {
    id: string;
    className: string;
  };
  domQuestion: {
    questionContainer: {
      id: string;
      className: string;
    };
    title: {
      id: string;
      className: string;
    };
    comment: {
      id: string;
      className: string;
    };
    image: {
      id: string;
      className: string;
    };
  };
  domChoice: {
    choicesContainer: {
      id: string;
      className: string;
    };

    choices: {
      id: string;
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
      id: string;
      className: string;
    };

    batu: {
      id: string;
      className: string;
    };
  };
  domAnswer: {
    answerContainer: {
      id: string;
      className: string;
    };
    resultMsg: {
      id: string;
      className: string;
    };
    title: {
      id: string;
      className: string;
    };
    comment: {
      id: string;
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
  suffix?: string;
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
