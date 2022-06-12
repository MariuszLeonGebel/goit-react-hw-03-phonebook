const getDataStorage = key => {
  const data = localStorage.getItem(`${key}`);
  const parsedData = JSON.parse(data);
  return parsedData;
};

export const dataStorage = {getDataStorage}