import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { rm } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const error = Error('FS operation failed');

  const path = join(__dirname, 'files', 'fileToRemove.txt');

  rm(path).catch(() => {
    throw error;
  });
};

await remove();
