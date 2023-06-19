import {resolve} from "path";
import {$dirName, notExistError} from '../utils';
import {rm} from "fs/promises";

const remove = async () => {
    const filePath = resolve($dirName(import.meta.url), 'files', 'fileToRemove.txt')

    notExistError(filePath)

    await rm(filePath)
};

await remove();