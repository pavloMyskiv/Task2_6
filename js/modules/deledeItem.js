const deleteCookie = (key) => {
  const cookies = document.cookie.split(';');
  cookies.forEach((cookie) => {
    const [cookieKey, value] = cookie.trim().split('=');
    if (cookieKey == key) {
      const expires = new Date(key - 60 * 1000);
      document.cookie = `${key}=; expires=${expires.toUTCString()}; path=/;`;
    }
  });
};

export const deleteItem = (dataIds, button) => {
  const index = dataIds.findIndex((item) => item.id == button.parentNode.id);
  dataIds.splice(index, 1);
  button.parentNode.remove();
  deleteCookie(button.parentNode.id);
};
