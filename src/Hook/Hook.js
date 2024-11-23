const getReadBookId = (key) => {
  const get = localStorage.getItem(key);
  if (get) {
    return JSON.parse(get);
  }
  return [];
};

export { getReadBookId };
