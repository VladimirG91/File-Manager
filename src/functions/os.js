import os from 'os';
import { getCurrentDirectory } from './getCurrentDirectory.js';

export const getEOL = () => {
  const eol = os.EOL;
  console.log(`System EOL: ${JSON.stringify(eol)}`);
  console.log(`You are currently in ${getCurrentDirectory()}`);
};

export const getCPUsInfo = () => {
  const cpus = os.cpus();
  const cpuInfo = cpus.map((cpu, index) => ({
    CPU: `CPU ${index + 1}`,
    Model: cpu.model,
    ClockRate: (cpu.speed / 1000).toFixed(2) + ' GHz',
  }));
  console.table(cpuInfo);
  console.log(`You are currently in ${getCurrentDirectory()}`);
};

export const getHomeDirectory = () => {
  const homeDirectory = os.homedir();
  console.log(`Home Directory: ${homeDirectory}`);
  console.log(`You are currently in ${getCurrentDirectory()}`);
};

export const getUsername = () => {
  const username = os.userInfo().username;
  console.log(`Current User Name: ${username}`);
  console.log(`You are currently in ${getCurrentDirectory()}`);
};

export const getArchitecture = () => {
  const architecture = os.arch();
  console.log(`Node.js Binary Architecture: ${architecture}`);
  console.log(`You are currently in ${getCurrentDirectory()}`);
};
