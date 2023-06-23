const task = new taskManager();
const taskHtml = createTaskHtml('Eze', 'Help', 'html', '06/24/2023', 'Pending');
console.log(task);
console.log(taskHtml);



task.addTask('John', 'Help', 'html', '06/24/2023', 'Pending');
task.render();
console.log(task.tasks);


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
    //console.log("name:  " + name);
    /*if (name == ""  ) {
        alert("Fill it ");
     } else {
            console.log("name:  " +name);
        }
    }*/

    if (name == "" || description == "" || assigned == "" || date == ""|| status == "Choose..." ) {
        alert("Please fill all the fields.");
     } else {
            console.log("name:  " +name ,"description: " + description, "assigned: " + assigned, "date: " + date, "status: " + status);
        }
    }
 
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
// });
button.addEventListener('click', validFormFieldInput)



 