
    
class taskManager {
    constructor(currentId) {
        this.currentId = 0;
        this.tasks =[];
    }
    
// constructor(currentId) {
//         this.task = [];
//         this.currentId = currentId;
        
       /*addTask ([taskNameInput, taskDescriptionInput, taskAssignedInput, taskDueDateInput, taskStatusInput]) {
            const name = taskNameInput.value;
            const description = taskDescriptionInput.value;
           const assigned = taskAssignedInput.value;
           const date = taskDueDateInput.value;
           const status = taskStatusInput.value;*/

           

           addTask (name, description, assigned, date, status) {
            
            
            const taskNameInput = document.querySelector('#taskName').value;
            const taskDescriptionInput = document.querySelector('#taskDescription').value;
            const taskAssignedInput = document.querySelector('#taskAssigned').value;
            const taskDueDateInput = document.querySelector('#taskDueDate').value;
            const taskStatusInput = document.querySelector('#taskStatus').value;
            const task = {
                id: this.currentId++,
                name: document.querySelector("#taskName").value,
                description: document.querySelector("#taskDescription").value,
                assigned: document.querySelector("#taskAssigned").value,
                date: document.querySelector("#taskDurDate").value,
                status: document.querySelector("#taskStatus").value,
            }
            this.tasks.push(task);

        //     const name = taskNameInput.value;
        //     const description = taskDescriptionInput.value;
        //    const assigned = taskAssignedInput.value;
        //    const date = taskDueDateInput.value;
        //    const status = taskStatusInput.value;
        }
        // currentId++;
    }

// }

    // const currentId = (newTask);

    //     addTask.push(...newtask);
    //     console.log(addTask);