module.exports = {
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts', '**/*.test.js'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
    QUIZINFO: {
      answer: {
        correct: {no: '1', msg: '正解です'},
        wrong: {msg: '不正解です'},
        answerTitle: '正解は:1番です',
        comment:
          'クイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説ですクイズの解説です',
      },
      question: {
        headerText: 'クイズです!',
        qtext:
          'なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？なんでしょうか？',
        qimagePath: './quizembed.exsample.png',
      },
      choices: [
        {no: '1', text: '選択肢1です'},
        {no: '2', text: '選択肢2です。'},
        {no: '3', text: '選択肢3です。'},
      ],
    },
  },
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
