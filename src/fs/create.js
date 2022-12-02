import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { appendFile, access } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const err = Error('FS operation failed');
  const dir = join(__dirname, 'files', 'fresh.txt');
  access(dir)
    .then(() => {
      console.log('error');
      throw err;
    })
    .catch((error) => {
      if (error === err) {
        throw err;
      }
      appendFile(dir, 'I am fresh and young');
    });
};

await create();
