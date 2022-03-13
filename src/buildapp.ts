import {QuizInfo} from './quizinfo.type';
import {embed as _embed} from './app';

declare const QUIZINFO: QuizInfo;

export function embed() {
  _embed(QUIZINFO);
}
