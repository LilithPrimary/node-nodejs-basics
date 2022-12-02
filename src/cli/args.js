const parseArgs = () => {
  const prefix = 'RSS_';
  const port = process.env;
  console.log(Object.keys(port).filter((key) => key.includes(prefix)));
};

parseArgs();
