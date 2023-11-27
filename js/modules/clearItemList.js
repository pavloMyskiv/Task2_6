import { clearAllCookies } from "./cookie.js";

export const cleanList = (list) => {
  clearAllCookies();
  list.innerHTML = '';
};
