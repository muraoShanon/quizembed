interface Choice {
  no: string;
  text: string;
}

export interface QuizInfo {
  question: {
    headerText: string;
    qtext: string;
    qimagePath: string;
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
    answerTitle: string;
    comment: string;
  };
}
