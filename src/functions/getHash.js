import fs from 'fs/promises';
import crypto from 'crypto';

const getHash = async (filePath) => {
  try {
    const fileData = await fs.readFile(filePath);
    const hash = crypto.createHash('sha256');
    hash.update(fileData);
    const fileHash = hash.digest('hex');

    console.log(`File: ${filePath}`);
    console.log(`Hash: ${fileHash}`);
  } catch (error) {
    console.log(`Error reading file: ${error.message}`);
  }
};

export { getHash };
