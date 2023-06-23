
 const createTaskHtml = (name, description, assigned, date, status) => ` 
 <div class="card">
   <div class="card-body bg-info">
     <h5 class="Task-2 text-success fw-bold">Task 2(${name})</h5>
     <div class="col-12">
     <a href="#" class="btn btn-success btn-sm fw-bold float-end">DONE(${status})</a></div>
     <h5 class="text-description fw-bold"><small>Description(${description})</small></h5> <br>
         <h5 class="assigned-to fw-bold"><small>Assigned to(${assigned})</small></h5> <br>
         <h5 class="due-date fw-bold"><small>Due Date: (${date})</small></h5> <br>
         <a href="#" class="btn btn-primary fw-bold">Delete</a>
   </div>
</div>`;
 
   


class taskManager {
    constructor(currentId=0) {
        this.currentId = currentId;
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
            
            
           
            const task = {
                id: this.currentId++,
                name: name,
                description: description,
                assigned: assigned,
                date: date,
                status: status,
            }
            this.tasks.push(task);

        //     const name = taskNameInput.value;
        //     const description = taskDescriptionInput.value;
        //    const assigned = taskAssignedInput.value;
        //    const date = taskDueDateInput.value;
        //    const status = taskStatusInput.value;
        }
        // currentId++;

        render() {
            const taskHtmlList = [];
            //for (const task of this.tasks) {
                for(let i=0; i < this.tasks.length; i++) {
                    const task = this.tasks[i];
                const currentDate = new Date(task.date);
                const formattedDate = currentDate.getDate();
                const taskHtml = createTaskHtml (task.name, task.description, task.assigned, formattedDate, task.status);
                taskHtmlList.push(taskHtml);
            }
            const tasksHtml = taskHtmlList.join('\n');
            // This where everything goes wrong
            const tasksList = document.querySelector('#taskList');

            tasksList.innerHTML = tasksHtml;
            // for(taskHtmlList = 0; taskHtmlList < 5; taskHtmlList++) {
            //     if( ) 

                }
            }
    //     }
    // }

// }

    // const currentId = (newTask);

    //     addTask.push(...newtask);
    //     console.log(addTask);