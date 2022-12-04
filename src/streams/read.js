import { ReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const read = ReadStream(join(__dirname, 'files', 'fileToRead.txt'));
  read.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
