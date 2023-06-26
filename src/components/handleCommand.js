import { Commands } from './commands.js';
import { goUpDirectory } from '../functions/goUpDirectory.js';
import { changeDirectory } from '../functions/changeDirectory.js';
import { listFilesAndFolders } from '../functions/listFilesAndFolders.js';
import { readFileContent } from '../functions/readFileContent.js';
import { createFile } from '../functions/createFile.js';
import { renameFile } from '../functions/renameFile.js';
import { copyFile } from '../functions/copyFile.js';
import { moveFile } from '../functions/moveFile.js';
import { deleteFile } from '../functions/deleteFile.js';
import {
  getEOL,
  getCPUsInfo,
  getHomeDirectory,
  getUsername,
  getArchitecture,
} from '../functions/os.js';
import { getHash } from '../functions/getHash.js';
import { compressFile, decompressFile } from '../functions/compressDecompress.js';
import { getCurrentDirectory } from '../functions/getCurrentDirectory.js';

export const handleCommand = async (input, rl) => {
  try {
    const args = input.match(/(".*?"|[^"\s]+)(?=\s*|\s*$)/g).map((arg) => arg.replace(/"/g, ''));
    const command = args.shift();

    if (Commands.includes(command)) {
      switch (command) {
        case 'up':
          goUpDirectory();
          break;
        case 'cd':
          const directoryName = args.join(' ');
          changeDirectory(directoryName);
          break;
        case 'ls':
          listFilesAndFolders();
          break;
        case 'cat':
          const catFileName = args.join(' ');
          await readFileContent(catFileName);
          break;
        case 'add':
          const newFileName = args.join(' ');
          createFile(newFileName);
          break;
        case 'rn':
          const oldFileName = args[0];
          const renamedFileName = args.slice(1).join(' ');
          renameFile(oldFileName, renamedFileName);
          break;
        case 'cp':
          const sourceFile = args[0];
          const destinationFile = args.slice(1).join(' ');
          await copyFile(sourceFile, destinationFile);
          break;
        case 'mv':
          const sourcePath = args[0];
          const destinationPath = args.slice(1).join(' ');
          await moveFile(sourcePath, destinationPath);
          break;
        case 'rm':
          const fileName = args.join(' ');
          deleteFile(fileName);
          break;
        case '.exit':
          rl.close();
          break;
        case 'hash':
          const filePath = args.join(' ');
          await getHash(filePath);
          break;
        case 'compress':
          const compressSourcePath = args[0];
          const compressDestinationPath = args[1];
          await compressFile(compressSourcePath, compressDestinationPath);
          break;
        case 'decompress':
          const compressedPath = args[0];
          const decompressedPath = args[1];
          await decompressFile(compressedPath, decompressedPath);
          break;
        case 'os':
          switch (args[0]) {
            case '--eol':
              getEOL();
              break;
            case '--cpus':
              getCPUsInfo();
              break;
            case '--homedir':
              getHomeDirectory();
              break;
            case '--username':
              getUsername();
              break;
            case '--architecture':
              getArchitecture();
              break;
            default:
              console.log('Invalid argument.');
          }
          break;
        default:
          console.log('Invalid input. Please enter a valid command.');
      }
    } else {
      console.log('Invalid input. Please enter a valid command.');
      console.log(`You are currently in ${getCurrentDirectory()}`);
    }
  } catch (error) {
    console.log('Operation failed:', error.message);
  }
};
