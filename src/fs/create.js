import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { $dirname } from '../utils/globals.js';
import { existOrError } from '../utils/helpers.js'

const create = async () => {
    const filePath = resolve($dirname(import.meta.url), 'files', 'fresh.txt')
    existOrError(filePath)
    await writeFile(filePath, 'I am fresh and young')
};

await create();