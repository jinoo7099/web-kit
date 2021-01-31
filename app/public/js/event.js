const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', () => {
  const id = document.getElementById('id');
  const pwd = document.getElementById('pwd');
  $.ajax({
    type: 'post',
    url: '/app/login_process',
    data: { id: id.value, pwd: pwd.value },
    dataType: 'json',
    success: function (response) {
      console.log(response);
    },
  });
});
