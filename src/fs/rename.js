import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { access, rename as renameFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const error = Error('FS operation failed');
  const oldName = 'wrongFilename.txt';
  const newName = 'properFilename.md';
  const oldPath = join(__dirname, 'files', oldName);
  const newPath = join(__dirname, 'files', newName);

  await access(newPath)
    .then(() => {
      throw error;
    })
    .catch((err) => {
      if (err === error) {
        throw error;
      }
    });

  renameFile(oldPath, newPath).catch(() => {
    throw error;
  });
};

await rename();
