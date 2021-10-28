var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    //capture form input 
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type").value;
   // create object for form input
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    createTaskEl(taskDataObj);
}
var createTaskEl = function(taskDataObj) {
     //create DOM elements
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    var taskInfoEl = document.createElement("div");
     //print form input to DOM
     taskInfoEl.innerHTML = "<h3 class= 'task-name'>" + taskDataObj.name + "</h3><span class= 'task-type'>" + taskDataObj.type + "</span>"
     listItemEl.appendChild(taskInfoEl);
     tasksToDoEl.appendChild(listItemEl);
}
formEl.addEventListener("submit", taskFormHandler);