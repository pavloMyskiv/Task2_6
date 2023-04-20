const createItemCookies = (item) => {
  const expires = new Date(item.id + 24 * 60 * 60 * 1000);
  const cookieValue = JSON.stringify(item);
  document.cookie = `${
    item.id
  }=${cookieValue}; expires=${expires.toUTCString()}; path=/`;
};

const createItemHTML = (item) => {
  return `<div id="${item.id}" class="${item.confirm ? 'confirm' : ''}">
  <p>${item.text}</p>
  <button class="confirm"></button>
  <button class="delete"></button>`;
};

export const addItem = (dataIds, list, text) => {
  if (text.value) {
    const itemData = {
      id: Date.now(),
      text: text.value,
      confirm: false,
    };
    list.insertAdjacentHTML('afterbegin', createItemHTML(itemData));
    dataIds.push(itemData.id);
    createItemCookies(itemData);
  }
};

export const renderItemsFromCookies = (dataIds, list) => {
  const cookies = document.cookie.split(';');
  if (cookies[0] != '') {
    for (let i = 0; i < cookies.length; i++) {
      let [key, value] = cookies[i].trim().split('=');
      value = JSON.parse(value);
      list.insertAdjacentHTML('afterbegin', createItemHTML(value));
      dataIds.push(value.id);
    }
  }
};
