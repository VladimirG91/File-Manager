export const getName = () => {
  const defaultUsername = 'Anonimous';
  const username = process.argv
    .slice(2)
    .map((arg) => {
      const name = arg.split('=');
      return name.at(-1);
    })
    .join('');
  return username ? username : defaultUsername;
};
