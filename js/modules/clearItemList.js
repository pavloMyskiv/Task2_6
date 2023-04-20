const clearAllCookies = (keys) => {
  for (let i = 0; i < keys.length; i++) {
    const expires = new Date(keys[i] - 60 * 1000);
    document.cookie = `${keys[i]}=; expires=${expires.toUTCString()}; path=/;`;
  }
};

export const cleanList = (dataIds, list) => {
  clearAllCookies(dataIds);
  dataIds.splice(0, dataIds.length);
  list.innerHTML = '';
};
