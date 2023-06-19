import {cp} from "fs/promises";
import {$dirName, existError, notExistError} from "../utils";
import {resolve} from "path";

const copy = async () => {
    const dirPath = $dirName(import.meta.url)
    const targetFolder = resolve(dirPath, 'files')
    const copyFolder = resolve(dirPath, 'files_copy')

    notExistError(targetFolder);
    existError(copyFolder);

    await cp(targetFolder, copyFolder, {
        recursive: true
    })
};

await copy();