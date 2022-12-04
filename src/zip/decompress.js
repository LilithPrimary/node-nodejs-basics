import { createUnzip } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const input = createReadStream(join(__dirname, 'files', 'archive.gz'));
  const output = createWriteStream(
    join(__dirname, 'files', 'fileToCompress.txt')
  );
  const decomp = createUnzip();
  input.pipe(decomp).pipe(output);
};

await decompress();
