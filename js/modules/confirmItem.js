import { getCookieValue, setCookieValue } from './cookie.js';

export const confirmItem = (button) => {
  const id = button.dataset.itemId;
  const itemBlock = document.getElementById(id);

  itemBlock.classList.toggle('confirm');

  let newItemValue = getCookieValue(id);
  newItemValue.confirm = itemBlock.classList.contains('confirm');

  setCookieValue(id, newItemValue);
};
