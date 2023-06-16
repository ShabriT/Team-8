const task = new taskManager();
console.log(task);



TaskManager.addTask('John', 'Help', 'html', '06/24/2023', 'Pending');
console.log(taskManager.tasks);

const button = document.querySelector('#btnSubmit');
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
 


button.addEventListener('click', validFormFieldInput)



 