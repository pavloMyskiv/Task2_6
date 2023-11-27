export const createItemCookies = (item) => {
  const expires = new Date(item.id + 24 * 60 * 60 * 1000);
  const cookieValue = JSON.stringify(item);
  document.cookie = `${
    item.id
  }=${cookieValue}; expires=${expires.toUTCString()}; path=/`;
};

export const deleteCookie = (key) => {
  const cookies = document.cookie.split(';');
  cookies.forEach((cookie) => {
    const [cookieKey, value] = cookie.trim().split('=');
    if (cookieKey == key) {
      const expires = new Date(key - 60 * 1000);
      document.cookie = `${key}=; expires=${expires.toUTCString()}; path=/;`;
    }
  });
};

export const setCookieValue = (key, value) => {
  const expires = new Date(key + 24 * 60 * 60 * 1000);

  value = JSON.stringify(value);
  document.cookie = `${key}=${value}; expires=${expires.toUTCString()}; path=/`;
};

export const getCookieValue = (key) => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const [cookieKey, cookieValue] = cookies[i].trim().split('=');

    if (cookieKey == key) {
      return JSON.parse(cookieValue);
    }
  }
};

export const clearAllCookies = () => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const [cookieKey, cookieValue] = cookies[i].trim().split('=');
    const expires = new Date(cookieKey - 60 * 1000);
    document.cookie = `${cookieKey}=; expires=${expires.toUTCString()}; path=/;`;
  }
};
