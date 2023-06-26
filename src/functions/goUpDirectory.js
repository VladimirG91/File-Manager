import path from 'path';
import { getCurrentDirectory } from './getCurrentDirectory.js';
import { directoryExists } from './checkExists.js';

export const goUpDirectory = () => {
  const currentDirectory = getCurrentDirectory();
  const parentDirectory = path.dirname(currentDirectory);

  if (directoryExists(parentDirectory)) {
    process.chdir(parentDirectory);
  } else {
    console.log(`Invalid input. Cannot go upper than the root directory.`);
  }
  console.log(`You are currently in ${getCurrentDirectory()}`);
};
