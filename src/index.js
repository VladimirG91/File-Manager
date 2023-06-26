import { homedir } from 'os';
import { createReadline } from './components/createReadline.js';
import { getName } from './components/getName.js';

process.chdir(homedir());
const username = getName();
console.log(`Welcome to the File Manager, ${username}`);
console.log(`You are currently in ${process.cwd()}`);

createReadline(username);
