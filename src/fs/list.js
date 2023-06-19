import {resolve} from 'path';
import {$dirName, notExistError} from '../utils';
import {readdir} from 'fs/promises';

const list = async () => {
    const dirPath = resolve($dirName(import.meta.url), 'files')

    notExistError(dirPath);

    (await readdir(dirPath, {withFileTypes: true}))
        .filter(fileOrDir => !fileOrDir.isDirectory())
        .forEach((file) => {
            console.log(file.name)
        })
};

await list();