import typescript from '@rollup/plugin-typescript';

export default [
  //Common Parts
  {
    input: 'src/app.ts',
    output: {
      file: 'lib/app.js',
      format: 'cjs',
    },
    plugins: [typescript({rootDir: './src', outDir: 'lib', module: 'esnext'})],
  },
  {
    input: 'src/build.ts',
    output: {
      file: 'lib/build.js',
      format: 'cjs',
    },
    plugins: [typescript({rootDir: './src', outDir: 'lib', module: 'esnext'})],
  },
  //CJS
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.js',
      format: 'cjs',
    },
    plugins: [typescript({rootDir: './src', outDir: 'lib'})],
  },
];
