import path from 'path';
import { getCurrentDirectory } from './getCurrentDirectory.js';
import { directoryExists } from './checkExists.js';

export const changeDirectory = async (directoryPath) => {
  const currentDirectory = getCurrentDirectory();
  const newDirectory = path.resolve(currentDirectory, directoryPath);

  if (await directoryExists(newDirectory)) {
    process.chdir(newDirectory);
    console.log(`You are currently in ${getCurrentDirectory()}`);
  } else {
    console.log(`Invalid input. The directory '${newDirectory}' does not exist.`);
  }
  console.log(`You are currently in ${getCurrentDirectory()}`);
};
