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
export const handleCommand = async (input, rl) => {
  try {
    const [command, ...args] = input.trim().split(' ');
    if (Commands.includes(command)) {
      switch (command) {
        case 'up':
          goUpDirectory();
          break;
        case 'cd':
          changeDirectory(args[0]);
          break;
        case 'ls':
          listFilesAndFolders();
          break;
        case 'cat':
          await readFileContent(args[0]);
          break;
        case 'add':
          createFile(args[0]);
          break;
        case 'rn':
          renameFile(args[0], args[1]);
          break;
        case 'cp':
          await copyFile(args[0], args[1]);
          break;
        case 'mv':
          await moveFile(args[0], args[1]);
          break;
        case 'rm':
          deleteFile(args[0]);
          break;
        case '.exit':
          rl.close();
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
    }
  } catch (error) {
    console.log('Operation failed:', error.message);
  }
};
