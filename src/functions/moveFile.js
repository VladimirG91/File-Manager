import fs from 'fs';
import path from 'path';
import { getCurrentDirectory } from './getCurrentDirectory.js';
import { directoryExists } from './checkExists.js';
import { fileExists } from './checkExists.js';

export const moveFile = async (sourcePath, destinationPath) => {
  if (await fileExists(sourcePath)) {
    if (await directoryExists(destinationPath)) {
      const fileName = path.basename(sourcePath);
      const destinationFilePath = path.join(destinationPath, fileName);

      const sourceStream = fs.createReadStream(sourcePath);
      const destinationStream = fs.createWriteStream(destinationFilePath);

      sourceStream.pipe(destinationStream);

      sourceStream.on('end', async () => {
        await fs.promises.unlink(sourcePath);
        console.log(`File '${sourcePath}' moved to '${destinationFilePath}' successfully.`);
      });

      sourceStream.on('error', (error) => {
        console.log(`Operation failed. Error moving file: ${error.message}`);
      });
    } else {
      console.log(`Invalid input. The destination directory '${destinationPath}' does not exist.`);
    }
  } else {
    console.log(`Invalid input. The file '${sourcePath}' does not exist.`);
  }
  console.log(`You are currently in ${getCurrentDirectory()}`);
};
