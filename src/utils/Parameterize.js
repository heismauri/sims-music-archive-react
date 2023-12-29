const Parameterize = (str) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .normalize('NFKD')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export default Parameterize;
