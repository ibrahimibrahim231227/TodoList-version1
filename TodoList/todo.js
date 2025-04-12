const todoNameList = [], todoHistoryList = [];
      function addToDo() {
        let toDoName = document.querySelector('.todo-name').value;
        let toDoHistory = document.querySelector('.todo-history').value;
        todoNameList.push(toDoName);
        todoHistoryList.push(toDoHistory);
        document.querySelector('.todo-name').value = '';
        document.querySelector('.todo-history').value = '';
      }
      function displayTodoList() {
        let htmlDispaly = '';
        for(let i = 0; i < todoNameList.length; i++) {
          htmlDispaly += `<p>${todoNameList[i]}&nbsp&nbsp&nbsp&nbsp&nbsp
            &nbsp&nbsp&nbsp&nbsp
            ${todoHistoryList[i]}
            <button onclick = "
            todoNameList.splice(${i}, 1);
            todoHistoryList.splice(${i}, 1);
            displayTodoList();
          ">
          Delete
          </button>
          </p>`;
        }
        document.querySelector('.todolist-display').innerHTML = htmlDispaly;
      }