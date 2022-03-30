import {QuizInfo} from './types';
import {embed} from './app';

declare const QUIZINFO: QuizInfo;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    embed(QUIZINFO);
  });
} else {
  embed(QUIZINFO);
}
