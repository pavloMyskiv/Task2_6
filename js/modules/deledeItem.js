import { deleteCookie } from './cookie.js';

export const deleteItem = (button) => {
  const id = button.dataset.itemId;
  const itemBlock = document.getElementById(id);
  itemBlock.remove();
  deleteCookie(id);
};
