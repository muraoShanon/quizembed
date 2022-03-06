interface Choice {
  no: string;
  text: string;
}

export interface QuizInfo {
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
