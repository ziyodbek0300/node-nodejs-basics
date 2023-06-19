import {createReadStream, createWriteStream} from "fs";
import {$dirName} from "../utils";
import {resolve} from "path";
import {createGunzip} from "zlib";

const decompress = async () => {
    const gzPath = resolve($dirName(import.meta.url), 'files', 'archive.gz')
    const stream = createReadStream(gzPath)

    const filePath = resolve($dirname(import.meta.url), 'files', 'fileToCompress.txt')

    stream
        .pipe(createGunzip(stream))
        .pipe(createWriteStream(filePath))
        .on('error', (err) => {
            throw new Error(err)
        })
};

await decompress();