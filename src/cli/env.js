const parseEnv = () => {
  const prefix = 'RSS_';
  const variables = process.env;
  Object.keys(variables)
    .filter((key) => key.includes(prefix))
    .forEach((el) => console.log(`${el} = ${variables[el]}`));
};

parseEnv();
