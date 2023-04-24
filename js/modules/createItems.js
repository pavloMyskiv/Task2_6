import { createItemCookies } from './cookie.js';

const createItemHTML = (item) => {
  return `<div id="${item.id}" class="${item.confirm ? 'confirm' : ''}">
  <p>${item.text}</p>
  <button class="confirm" data-item-id="${item.id}"></button>
  <button class="delete" data-item-id="${item.id}"></button>`;
};

export const addItem = (list, text) => {
  if (text.value) {
    const itemData = {
      id: Date.now(),
      text: text.value,
      confirm: false,
    };
    list.insertAdjacentHTML('afterbegin', createItemHTML(itemData));
    createItemCookies(itemData);
  }
};

export const renderItemsFromCookies = (list) => {
  const cookies = document.cookie.split(';');
  if (cookies[0] != '') {
    for (let i = 0; i < cookies.length; i++) {
      let [key, value] = cookies[i].trim().split('=');
      value = JSON.parse(value);
      list.insertAdjacentHTML('afterbegin', createItemHTML(value));
    }
  }
};
