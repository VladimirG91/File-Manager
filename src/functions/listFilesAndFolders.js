import fs from 'fs';
import path from 'path';
import { getCurrentDirectory } from './getCurrentDirectory.js';

export const listFilesAndFolders = async () => {
  const currentDirectory = getCurrentDirectory();
  const contents = await fs.promises.readdir(currentDirectory, {
    withFileTypes: true,
  });

  const directories = [];
  const files = [];

  for (const item of contents) {
    const itemName = item.name;
    const itemPath = path.join(currentDirectory, itemName);
    const isDirectory = item.isDirectory();
    const itemType = isDirectory ? 'Directory' : 'File';
    const itemInfo = { Name: itemName, Type: itemType };

    if (isDirectory) {
      directories.push(itemInfo);
    } else {
      files.push(itemInfo);
    }
  }

  const sortedContents = [...directories, ...files];
  console.table(sortedContents);
  console.log(`You are currently in ${currentDirectory}`);
};
