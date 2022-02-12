import {promises as fs} from 'fs';
import {resolve} from 'path';
import {QuizInfo} from './quizinfo.type';

export async function createQuizInfoJson(json: QuizInfo): Promise<void> {
  await fs.writeFile(resolve(__dirname, 'quizinfo.json'), JSON.stringify(json));
}
