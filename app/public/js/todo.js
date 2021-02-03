document.addEventListener('click', function (e) {
  switch (e.target.className) {
    case 'btn-delete':
      deleteTask(e);
      break;

    case 'btn-add':
      addTask();
      break;

    case 'btn-update':
      updateTask(e);
      break;
  }
});

function addTask() {
  const task = document.querySelector('.input-task');
  const date = new Date();
  console.log('hi');
  console.log(task.value);
  if (task.value) {
    $.ajax({
      type: 'post',
      url: '/todo/add',
      data: { name: task.value, date: date.toLocaleString() },
      dataType: 'json',
      success: function (response) {
        const todo = document.querySelector('#Todo');
        const childNode = document.createElement('p');
        childNode.innerHTML = `<span>${task.value}</span> <span>${date.toLocaleString()}</span>
        <button class='btn-delete'>delete</button> <button class='btn-update'>---></button><p>`;
        todo.appendChild(childNode);
      },
    });
  } else {
    alert('task를 입력해주세요');
  }
}

function deleteTask(e) {
  const task = e.target.parentElement.querySelectorAll('span');
  const state = e.target.parentElement.parentElement.className;
  e.target.parentElement.parentElement.removeChild(e.target.parentElement);
  const name = task[0].innerHTML;
  const date = task[1].innerHTML;
  fetch('/todo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      date: date,
      state: state,
    }),
  })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
}

function updateTask(e) {
  const task = e.target.parentElement.querySelectorAll('span');
  const name = task[0].innerHTML;
  const date = task[1].innerHTML;
  const state = e.target.parentElement.parentElement.className;
  fetch('/todo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      date: date,
      state: state,
    }),
  })
    .then((response) => {
      console.log(response);
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);
      addUpdatedTask(state, name, date);
    })
    .catch((err) => console.log(err));
}

function addUpdatedTask(state, name, date) {
  const childNode = document.createElement('p');
  childNode.innerHTML = `<span>${name}</span> <span>${date}</span>
    <button class='btn-delete'>delete</button> <button class='btn-update'>---></button><p>`;

  if (state === 'todo') {
    const doing = document.querySelector('#Doing');
    doing.appendChild(childNode);
  } else if (state === 'doing') {
    const done = document.querySelector('#Done');
    done.appendChild(childNode);
  } else {
    const todo = document.querySelector('#Todo');
    todo.appendChild(childNode);
  }
}
