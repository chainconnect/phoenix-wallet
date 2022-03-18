"use strict";
import chalk from "chalk";
import chokidar from "chokidar";
import esbuild from "esbuild";
import fse from "fs-extra";
import path from "path";
import config, { outPath, __dirname } from "./config.mjs";

const srcPath = path.resolve(__dirname, "../src");
const popupPath = path.resolve(__dirname, "../src/popup.js");
const contentScriptPath = path.resolve(__dirname, "../src/content_script.js");
const publicPath = path.resolve(__dirname, "../public");

console.log(`--- BUILDING IN WATCH MODE ---`);

chokidar.watch([srcPath, publicPath], {}).on("all", (_, triggerPath) => {
  if (triggerPath.includes("public")) {
    fse.copySync(publicPath, outPath, {
      overwrite: true,
    });
  }

  esbuild
    .build({
      ...config,
      entryPoints: {
        popup: popupPath,
      },
    })
    .catch(console.error);
});
