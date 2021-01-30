import { $, $$, $$$ } from '../utils/util.js';

const btnLogin = $('.btn-login');

btnLogin.addEventListener('click', () => {
  const id = $$$('id');
  const pwd = $$$('pwd');

  console.log(id.value);
  console.log(pwd.value);
});
