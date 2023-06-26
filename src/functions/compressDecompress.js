import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { pipeline } from 'stream';
import { getCurrentDirectory } from './getCurrentDirectory.js';

const compressFile = async (sourcePath, destinationPath) => {
  const readStream = createReadStream(`${sourcePath}`);
  const writeStream = createWriteStream(`${destinationPath}.br`);
  const compressStream = createBrotliCompress();

  await pipeline(readStream, compressStream, writeStream, (error) => {
    if (error) {
      console.log(`Operation failed. Error compressing file: ${error.message}`);
    } else {
      console.log(`File '${sourcePath}' compressed to '${destinationPath}' successfully.`);
    }
    console.log(`You are currently in ${getCurrentDirectory()}`);
  });
};

const decompressFile = async (sourcePath, destinationPath) => {
  const readStream = createReadStream(`${sourcePath}.br`);
  const writeStream = createWriteStream(`${destinationPath}`);
  const decompressStream = createBrotliDecompress();

  await pipeline(readStream, decompressStream, writeStream, (error) => {
    if (error) {
      console.log(`Operation failed. Error decompressing file: ${error.message}`);
    } else {
      console.log(`File '${sourcePath}' decompressed to '${destinationPath}' successfully.`);
    }
    console.log(`You are currently in ${getCurrentDirectory()}`);
  });
};

export { compressFile, decompressFile };
