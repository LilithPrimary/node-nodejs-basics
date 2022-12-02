import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const error = Error('FS operation failed');

  const path = join(__dirname, 'files');

  const files = await readdir(path).catch(() => {
    throw error;
  });
  console.table(files);
};

await list();
