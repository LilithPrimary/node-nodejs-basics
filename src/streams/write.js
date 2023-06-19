import { createWriteStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const writeStream = createWriteStream(
    join(__dirname, 'files', 'fileToWrite.txt')
  );

  process.stdin.pipe(writeStream);
};

await write();
