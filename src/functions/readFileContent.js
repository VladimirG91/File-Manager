import fs from 'fs';
import path from 'path';

export const readFileContent = (filePath) => {
  const readStream = fs.createReadStream(path.resolve(filePath), 'utf-8');
  readStream.on('data', (chunk) => {
    console.log(chunk);
  });
  readStream.on('error', () => {
    console.log('Operation Failed');
  });
};
