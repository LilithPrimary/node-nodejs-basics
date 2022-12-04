import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const input = await readFile(
    join(__dirname, 'files', 'fileToCalculateHashFor.txt'),
    { encoding: 'utf8' }
  );

  const hash = createHash('sha256');

  const output = hash.update(input).digest('hex');

  console.log(output);
};

await calculateHash();
