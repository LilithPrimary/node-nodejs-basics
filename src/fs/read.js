import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const error = Error('FS operation failed');

  const path = join(__dirname, 'files', 'fileToRead.txt');

  const text = await readFile(path, { encoding: 'utf8' }).catch(() => {
    throw error;
  });
  console.log(text);
};

await read();
