import fs from 'fs/promises';
import path from 'path';
import { getCurrentDirectory } from './getCurrentDirectory.js';
import { fileExists } from './checkExists.js';

export const createFile = async (fileName) => {
  const currentDirectory = getCurrentDirectory();
  const filePath = path.join(currentDirectory, fileName);

  if (await fileExists(filePath)) {
    console.log(`Invalid input. The file '${filePath}' already exists.`);
  } else {
    await fs.writeFile(filePath, '');
    console.log(`File '${filePath}' created successfully.`);
  }
  console.log(`You are currently in ${getCurrentDirectory()}`);
};
