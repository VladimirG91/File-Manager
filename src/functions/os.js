import os from 'os';

export const getEOL = () => {
  const eol = os.EOL;
  console.log(`System EOL: ${JSON.stringify(eol)}`);
};

export const getCPUsInfo = () => {
  const cpus = os.cpus();
  const cpuInfo = cpus.map((cpu, index) => ({
    CPU: `CPU ${index + 1}`,
    Model: cpu.model,
    ClockRate: (cpu.speed / 1000).toFixed(2) + ' GHz',
  }));
  console.table(cpuInfo);
};

export const getHomeDirectory = () => {
  const homeDirectory = os.homedir();
  console.log(`Home Directory: ${homeDirectory}`);
};

export const getUsername = () => {
  const username = os.userInfo().username;
  console.log(`Current User Name: ${username}`);
};

export const getArchitecture = () => {
  const architecture = os.arch();
  console.log(`Node.js Binary Architecture: ${architecture}`);
};
