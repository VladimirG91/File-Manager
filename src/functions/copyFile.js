import fs from 'fs';
import path from 'path';
import { getCurrentDirectory } from './getCurrentDirectory.js';
import { directoryExists } from './checkExists.js';
import { fileExists } from './checkExists.js';

export const copyFile = async (sourcePath, destinationPath) => {
  if (await fileExists(sourcePath)) {
    if (await directoryExists(destinationPath)) {
      const fileName = path.basename(sourcePath);
      const destinationFilePath = path.join(destinationPath, fileName);

      const sourceStream = fs.createReadStream(sourcePath);
      const destinationStream = fs.createWriteStream(destinationFilePath);

      sourceStream.pipe(destinationStream);

      sourceStream.on('end', () => {
        console.log(`File '${sourcePath}' copied to '${destinationFilePath}' successfully.`);
      });

      sourceStream.on('error', (error) => {
        console.log(`Operation failed. Error copying file: ${error.message}`);
      });
    } else {
      console.log(`Invalid input. The destination directory '${destinationPath}' does not exist.`);
    }
  } else {
    console.log(`Invalid input. The file '${sourcePath}' does not exist.`);
  }
  console.log(`You are currently in ${getCurrentDirectory()}`);
};
