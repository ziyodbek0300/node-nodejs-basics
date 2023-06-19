import {resolve} from 'path';
import {$dirName, notExistError} from '../utils'
import {readFile} from 'fs/promises';

const read = async () => {
    const filePath = resolve($dirName(import.meta.url), 'files', 'fileToRead.txt')

    notExistError(filePath)

    const fileBody = await readFile(filePath, {encoding: 'utf-8'})
    console.log(fileBody)
};

await read();