import {createReadStream} from "fs";
import {$dirName} from "../utils";
import {resolve} from "path";

const read = async () => {
    const filePath = resolve($dirName(import.meta.url), 'files', 'fileToRead.txt')
    const stream = createReadStream(filePath, {encoding: 'utf-8'})

    stream.on('data', (chunk) => {
        process.stdout.write(chunk + '\n')
    })
};

await read();