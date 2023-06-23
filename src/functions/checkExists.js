import fs from 'fs/promises';

export const directoryExists = async (directoryPath) => {
  try {
    const stats = await fs.lstat(directoryPath);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
};

export const fileExists = async (filePath) => {
  try {
    const stats = await fs.lstat(filePath);
    return stats.isFile();
  } catch (error) {
    return false;
  }
};
