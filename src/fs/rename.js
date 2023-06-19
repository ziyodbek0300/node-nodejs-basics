import {resolve} from 'path';
import {$dirName, notExistError, existError} from '../utils';
import {rename as asyncRename} from 'fs/promises';

const rename = async () => {
    const dirPath = resolve($dirName(import.meta.url), 'files')
    const targetFilePath = resolve(dirPath, 'wrongFilename.txt')
    const newFilePath = resolve(dirPath, 'properFilename.md')

    notExistError(targetFilePath)
    existError(newFilePath)

    await asyncRename(targetFilePath, newFilePath)
};

await rename();