//

localStorage.setItem("todo", "Feed the cat");
localStorage.setItem("user", "Stas");
localStorage.setItem("todo", "food myself");

const user = localStorage.getItem("user");
console.log(typeof user);

// con

const newTodoList = {
  todo1: "feeding the cat",
  todo2: "feeding myself",
};
localStorage.setItem("todos", JSON.stringify(newTodoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));

console.log(retrieved);

const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
let todoNr = document.querySelector("#todo-nr b");
console.log(todoNr);
const items = todoList.children;

const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");

divNr = document.querySelector("#nr-items");
todoNr = document.createElement("h2");
divNr.appendChild(todoNr);
todoNr.innerHTML = `Number of items: <b>${items.length}</b>`;

button.addEventListener("click", function (e) {
  e.preventDefault();

  newItem = document.createElement("li");

  newItem.classList.add("item");

  newItem.innerText = `${nameInput.value}`;

  todoList.appendChild(newItem);

  todoNr.innerHTML = `Number of items: <b>${items.length}</b>`;

  nameInput.value = "";

  newItem.addEventListener("click", deleteItem);
});

// for (item of items) item.addEventListener("click", deleteItem);

function deleteItem(e) {
  e.target.remove();
  e.stopPropagation();
  console;
  todoNr.innerHTML = `Number of items: <b>${items.length}</b>`;
}

todoList.addEventListener("click", (evt) => {
  todoList.classList.toggle("fade");
});

// button.addEventListener("keydown", (event) => {
//   if (event.keyCode === 81) {
//     mainTitle.classList.toggle("spectucluar");
//   }
// });

// const collectionItems = document.querySelectorAll(".item" );
//
// const todoList = document.querySelector("#todo-list");
// const items = todoList.children;
// const todoNr = document.querySelectorAll(".item")[0];
//
// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "Item 8";
//
// todoList.appendChild(newItem);
//
// const newItem1 = document.createElement("li");
// newItem1.classList.add("item");
// newItem1.innerText = "Item 9";
//
// todoList.appendChild(newItem1);
//
// todoNr.innerText = "Todo for today " + items.length;
