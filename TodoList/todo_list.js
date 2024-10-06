let tasks = [];

// Declare variables to access html elements via ID and initialize
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllTasksBtn = document.getElementById('clearAllTasksBtn');

// Create the addTask function
function addTask() {
    //Retrieve the value entered into the taskInput HTML element by the user, trimming any trailing whitespace.
    const taskText = taskInput.value.trim();

    // define a if conditional statement to store input value:
    if(taskText !== "") {
        //Store the value into the empty tasks array
        tasks.push({text : taskText});
        //Resetting the value of the taskInput field to an empty string after adding the task, clearing the input for the next task entry.
        taskInput.value = ""
        //call the displayinput function to display task
        displayTasks();
    }
}

//Define dsiplaytask function
function displayTasks() {
    //clear the existing content within the taskList
    //element by setting its innerHTML to an empty string.
    taskList.innerHTML = ""

    //iterates through the tasks array using forEach, creating a list item <li> for each task.
    tasks.forEach((task, index) => {

        const li = document.createElement('li') ;
        //Constructs HTML content for each task by assigning it to li.innerHTML, and create a check input to toggle each task as completed or not
        li.innerHTML = `<input class="form-check-input" type="checkbox" id="task-${index}" ${task.completed ? 'checked' : ""}>
        <label class="form-check-label" for="task-${index}">${task.text}</label> `
        //With the help of li.querySelector, it sets up an event listener for each checkbox within the task list <li> element.
        //When the checkbox state changes, it triggers the toggleTask() function,
        li.querySelector('input').addEventListener('change', () => toggleTask(index));
        //Appends the newly created list item containing the task details in the To-Do List interface
        taskList.appendChild(li);
    } )

}

//Define the ToggleTask Function
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

//Create a clearCompletedTasks function
//filters the tasks array to retrieve only the tasks that are not marked as
//completed (task.completed is false), returning a new array excluding completed tasks.
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAllTasks() {
    // tasks = tasks.filter(task => !task.completed);
    if(confirm("Are you sure you want to clear all?")) {
        tasks = [];
    } else {
        tasks;
    }
    displayTasks();
}

//Listen for clicks after clicking the Add Task and Clear Completed buttons.
addTaskBtn.addEventListener('click', addTask);
clearCompletedBtn.addEventListener('click', clearCompletedTasks);
const cats = clearAllTasksBtn.addEventListener('click', clearAllTasks);
