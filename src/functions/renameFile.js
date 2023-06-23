import fs from 'fs/promises';
import path from 'path';
import { getCurrentDirectory } from './getCurrentDirectory.js';
import { fileExists } from './checkExists.js';

export const renameFile = async (filePath, newFileName) => {
  if (await fileExists(filePath)) {
    const directoryPath = path.dirname(filePath);
    const newFilePath = path.join(directoryPath, newFileName);

    await fs.rename(filePath, newFilePath);
    console.log(`File '${filePath}' renamed to '${newFilePath}' successfully.`);
  } else {
    console.log(`Invalid input. The file '${filePath}' does not exist.`);
  }
  console.log(`You are currently in ${getCurrentDirectory()}`);
};
