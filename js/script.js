import { renderItemsFromCookies } from './modules/renderItemsFromCookies.js';
import { addItem} from './modules/createItems.js';
import { confirmItem } from './modules/confirmItem.js';
import { deleteItem } from './modules/deledeItem.js';
import { cleanList } from './modules/clearItemList.js';

const form = document.querySelector('form');
const input = document.querySelector('input');
const itemList = document.querySelector('.items_list');
const cleanListButton = document.querySelector('.clean_list');

renderItemsFromCookies(itemList);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addItem(itemList, input);
  input.value = '';
});
itemList.addEventListener('click', (event) => {
  if (event.target.classList.contains('confirm')) {
    confirmItem(event.target);
  } else if (event.target.classList.contains('delete')) {
    deleteItem(event.target);
  }
});
cleanListButton.addEventListener('click', () => {
  cleanList(itemList);
});
