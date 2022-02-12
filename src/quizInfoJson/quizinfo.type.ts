interface Choice {
  no: string;
  text: string;
}

export interface QuizInfo {
  answer: {
    correct: {
      no: string;
      msg: string;
    };
    wrong: {
      msg: string;
    };
    answerText: string;
    comment: string;
  };
  question: {
    headerText: string;
    qtext: string;
    qimagePath: string;
  };
  choices: Choice[];
}
