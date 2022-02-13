/*
 * @jest-environment node
 */

import {build} from '../src/build';
import {promises as fs} from 'fs';
import {resolve} from 'path';

describe('build', () => {
  const outputPaths: string[] = [];

  afterEach(() => {
    outputPaths.forEach(async filepath => {
      await fs.unlink(filepath);
    });
  });
  test('ファイル出力', async () => {
    const outputDir = resolve(__dirname, '../dist/');
    const quizembedFileName = await build(outputDir);
    const fileFullPath = `${outputDir}/${quizembedFileName}`;

    outputPaths.push(fileFullPath);

    try {
      expect(await fs.stat(fileFullPath)).toBeTruthy();
    } catch (error) {
      console.error(error);
      expect(false).toBeTruthy();
    }
  }, 25000);
});
