//selecting html elements



let TodoInput = document.querySelector(".to-in");
let TodoButton = document.querySelector(".to-btn");
let todoList = document.querySelector(".todo-list");


//Adding Event Listener


todoBtn.addEventListener('click',addto);
todoList.addEventListener('click',Del);



//Add functions


function addto(e){


    //create Todo list div 
    const todoDiv = document.createElement('div')

e.preventDefault();

todoDiv.classList.add('todo')

//create Todo list 
const toLi = document.createElement('li')
toLi.classList.add('todoItems')

toLi.innerText = TodoInput.value


todoDiv.appendChild(toLi)


//Trash button

const trashbtn = document.createElement('button')
trashbtn.classList.add('trash')
trashbtn.innerText = "- Del"
todoDiv.appendChild(trashbtn)








TodoList.appendChild(todoDiv)
//clear Input

TodoInput.value = "";

}

// //Delete Function


function Del(e){



    const item = e.target

    

    if(item.classList[0] === 'trash'){


const todo = item.parentElement;
removelocal(todo)
todo.remove();


//ADD Storage

function todoStr(todo){

    let todos;

    if(localStorage.getItem('todos') === null){
        todos = [];

    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
todos.push(todo)    
localStorage,setItem("todos",JSON.stringify(todos));
}


funtion gettodo 
 {

    let todos;

    if(localStorage.getItem('todos') === null)
        todos = [];

     }
     else
     {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    
    
    todos.foreach(funtcion(todo) {


const todoDiv = document.createElement('div') 
todoDiv.classList.add('todo') 

//create li 

const toLi = document.createElement('li');
toLi.classList,add('todoItems')
toLi.innerText = todo

//Appending

todoDiv.appendchild(toLi);






//Trash button

const trashbtn = document.createElement('button')
trashbtn.classList.add('trash')
trashbtn.innerText = "- Del"
todoDiv.appendChild(trashbtn)
todoList.appendChild(todoDiv)
    });

    
}


function removelocal(todo){

    let todos;

}

    
}









9














9)






    }





}