/** @format */

import { addItem, renderItemsFromCookies } from './modules/createItems.js';
import { confirmItem } from './modules/confirmItem.js';
import { deleteItem } from './modules/deledeItem.js';
import { cleanList } from './modules/clearItemList.js';

const form = document.querySelector('form');
const input = document.querySelector('input');
const itemList = document.querySelector('.items_list');
const cleanListButton = document.querySelector('.clean_list');

let itemIds = [];

renderItemsFromCookies(itemIds, itemList);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addItem(itemIds, itemList, input);
  input.value = '';
});
itemList.addEventListener('click', (event) => {
  if (event.target.classList.contains('confirm')) {
    confirmItem(itemIds, event.target);
  } else if (event.target.classList.contains('delete')) {
    deleteItem(itemIds, event.target);
  }
});
cleanListButton.addEventListener('click', () => {
  cleanList(itemIds, itemList);
});
