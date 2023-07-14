const task = new taskManager();
const task1 = task.getTaskById(0);

//task.addTask('John', 'Help', 'html', '06/24/2023', 'Pending');
task.load();
task.render();

console.log(task.tasks);
console.log(task.save);


const button = document.querySelector('#btnSubmit');
const form = document.querySelector('#form')
const taskNameInput = document.querySelector('#taskName');
const taskDescriptionInput = document.querySelector('#taskDescription');
const taskAssignedInput = document.querySelector('#taskAssigned');
const taskDueDateInput = document.querySelector('#taskDueDate');
const taskStatusInput = document.querySelector('#taskStatus');


 
 const validFormFieldInput = (event) => {
    event.preventDefault();
    const name = taskNameInput.value;
    const description = taskDescriptionInput.value;
    const assigned = taskAssignedInput.value;
    const date = taskDueDateInput.value;
    const status = taskStatusInput.value;
   

    if (name == "" || description == "" || assigned == "" || date == ""|| status == "Choose..." ) {
        alert("Please fill all the fields.");
     } 
     else 
     {
        task.addTask(name, description, assigned, date, status);
        task.render();
        task.save();
        form.reset();
    }
        
}
 

button.addEventListener('click', validFormFieldInput)


const taskListVariable = document.querySelector("#taskList");


taskListVariable.addEventListener('click', (event) => {
    if (event.target.classList.contains("done-button")) {
        
        const parentTask = event.target.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
       
        const currentTask = task.getTaskById(taskId);
     
        currentTask.status = 'Done';
        task.render();
        console.log('this is a good test');
    }
    
      if (event.target.classList.contains("delete-button")) {
        
                    const parentTask = event.target.parentElement.parentElement;
                    console.log(parentTask);
                    const taskId = Number(parentTask.dataset.taskId);
                    task.deleteTask(taskId);
                    task.save();
                    task.render();  
                }
                 else {
                    console.log("else");
                }
            
    }
)



 