let todoList = JSON.parse(localStorage.getItem('todoList')) || [];//parse is used to convert string into object

function renderTodoList(){
      
  let todoListHTML = '';

  todoList.forEach((todoObject,index) => {
    const {name,dueDate} = todoObject;
    const html = 
    `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class ="delete-todo-button js-delete-todo-button" 
        >Delete</button>`;
      
      todoListHTML +=html;


  })

    /* for (let i=0;i<todoList.length;i++){
      
      const todoObject = todoList[i];
      //const name = todoObject.name;
      //const dueDate = todoObject.dueDate;
      const {name,dueDate} = todoObject;//if variable and value of object is same it can be written as name,dueDate. This is known as Destructuring


      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class ="delete-todo-button" 
        onclick="
         todoList.splice(${i}, 1);
         localStorage.setItem('todoList',JSON.stringify(todoList));
         renderTodoList();
        ">Delete</button>`;
      
      todoListHTML +=html;

      

    } */

    document.querySelector(`.js-todo-list`).innerHTML = todoListHTML;
    document.querySelectorAll('.js-delete-todo-button').forEach((deletebutton,index) => {
      deletebutton.addEventListener('click', ()=>{

        todoList.splice(index, 1);
         localStorage.setItem('todoList',JSON.stringify(todoList));
         renderTodoList();
        

      });

    });
  
}

document.querySelector('.js-add-todo-button')
.addEventListener('click',()=>{
  addToDo();
})


function addToDo(){
  const inputElement=document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    //name:name,
    //dueDate:dueDate
    name,dueDate
  });

  localStorage.setItem('todoList',JSON.stringify(todoList));//stingify is used to convert object to string

  renderTodoList();


  

  dateInputElement.value = '';
  inputElement.value = '';

 
  
 

}


