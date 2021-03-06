import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

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
    input: 'src/buildapp.ts',
    output: {
      file: 'lib/buildapp.js',
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
  //iife
  {
    input: 'src/app.ts',
    output: {
      file: 'lib/quizembed.js',
      format: 'iife',
      name: 'quizembed',
    },
    extend: true,
    plugins: [typescript({rootDir: './src', outDir: 'lib', module: 'esnext'})],
  },
  //dts
  {
    input: 'src/index.ts',
    output: {
      file: 'lib/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];
