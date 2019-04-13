import { resolve } from 'path';
import { realpathSync } from 'fs';
import pMap from 'p-map';
import fg from 'fast-glob';
import execa from 'execa';
import chalk from 'chalk';
import Listr from 'listr';

const resolveRoot = relativePath => resolve(
  realpathSync(process.cwd()),
  relativePath,
);

(async () => {
  try {
    const tasks = new Listr([
      {
        title: '构建 `esm` 模块',
        task: async () => {
          const src = fg(['src/**/*.js']);

          return pMap(
            await src,
            async (path) => {
              try {
                return await execa(
                  'npx',
                  [
                    'babel',
                    '-d',
                    resolveRoot('esm'),
                    resolveRoot(path),
                  ]
                );
              } catch (err) {
                throw err;
              }
            },
            {concurrency: 8},
          );
        }
      },

      {
        title: '构建 `umd` 模块',
        task: () => execa('npx', [
          'webpack',
          '--silent',
        ])
      },

      {
        title: '测试',
        task: () => execa('yarn', [
          'test',
        ])
      },
    ]);

    console.log('');
    await tasks.run();
    console.log('');
  } catch (err) {
    throw err;
  }
})();
