import esbuild from 'esbuild';
import path from 'path';
import fse from 'fs-extra';
import config, { outPath, __dirname } from './config.mjs';

const publicFolder = path.resolve(__dirname, '../public')
const distFolder = path.resolve(__dirname, '../dist')

fse.copySync(publicFolder, distFolder, {
  overwrite: true,
});

esbuild.buildSync({
  target: 'esnext',
  tsconfig: path.resolve(__dirname, '../tsconfig.json'),
  bundle: true,
  outdir: path.resolve(process.cwd(), 'dist'),
  entryPoints: {
    popup: path.resolve(__dirname, '../src/popup.tsx'),
  },
  plugins: [],
});

// esbuild.buildSync({
//   target: 'es5',
//   bundle: true,
//   outdir: path.resolve(process.cwd(), 'dist'),
//   entryPoints: {
//     content_script: path.resolve(__dirname, '../src/content_script.js'),
//   },
// });
