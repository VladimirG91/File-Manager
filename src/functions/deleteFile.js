import fs from 'fs';
import path from 'path';
import { getCurrentDirectory } from './getCurrentDirectory.js';
import { fileExists } from './checkExists.js';

export const deleteFile = async (filePath) => {
  if (await fileExists(filePath)) {
    await fs.promises.unlink(filePath);
    console.log(`File '${filePath}' deleted successfully.`);
  } else {
    console.log(`Invalid input. The file '${filePath}' does not exist.`);
  }
  console.log(`You are currently in ${getCurrentDirectory()}`);
};
