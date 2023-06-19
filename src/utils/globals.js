import {dirname} from "path";
import {fileURLToPath} from "url";

export const $fileName = (url) => fileURLToPath(url);
export const $dirName = (url) => dirname($filename(url));