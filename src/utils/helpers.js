import {existsSync} from 'fs';

export function existError(filePath, humanMessage = 'File exist') {
    if (existsSync(filePath)) {
        throw new Error(`FS operation failed; ${humanMessage}`)
    }
}

export function notExistError(filePath, humanMessage = 'File not exist') {
    if (!existsSync(filePath)) {
        throw new Error(`FS operation failed; ${humanMessage}`)
    }
}