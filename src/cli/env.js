const parseEnv = () => {
  const prefix = 'RSS_';
  const variables = process.env;

  const varsWithPrefix = Object.keys(variables)
    .filter((key) => key.includes(prefix))
    .map((el) => `${el} = ${variables[el]}`);

  console.log(varsWithPrefix.join('; '));
};

parseEnv();
