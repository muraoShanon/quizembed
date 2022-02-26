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
    answerTitle: string;
    comment: string;
  };
  question: {
    headerText: string;
    qtext: string;
    qimagePath: string;
  };
  choices: Choice[];
}
