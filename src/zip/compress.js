import {createReadStream, createWriteStream} from "fs";
import {$dirName} from "../utils";
import {dirname, resolve} from "path";
import {createGzip} from "zlib";

const compress = async () => {
    const filePath = resolve($dirName(import.meta.url), 'files', 'fileToCompress.txt')
    const stream = createReadStream(filePath, {encoding: 'utf-8'})

    const gzPath = resolve(dirname(filePath), 'archive.gz')

    stream
        .pipe(createGzip())
        .pipe(createWriteStream(gzPath))
        .on('error', (err) => {
            throw new Error(err)
        })
};

await compress();