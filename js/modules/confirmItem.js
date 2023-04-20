const setCookieValue = (key, value) => {
  const expires = new Date(key + 24 * 60 * 60 * 1000);

  value = JSON.stringify(value);
  document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/`;
};

const getCookieValue = (key) => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const [cookieKey, cookieValue] = cookies[i].trim().split('=');

    if (cookieKey == key) {
      return JSON.parse(cookieValue);
    }
  }
};

export const confirmItem = (dataIds, button) => {
  button.parentNode.classList.toggle('confirm');
  const index = dataIds.findIndex((item) => item == button.parentNode.id);
  let newItemValue = getCookieValue(dataIds[index]);
  newItemValue.confirm = button.parentNode.classList.contains('confirm')
    ? true
    : false;
  setCookieValue(dataIds[index], newItemValue);
};
