
 const createTaskHtml = (name, description, assigned, date, status, id) => ` 
 <div class="card"  data-task-id=${id}>
   <div class="card-body bg-info">
    
     <div class="col-12">
     <a href="#" class="btn btn-success btn-sm fw-bold float-end done-button">Mark As Done</a></div>
     <br>
        <h5 class="Task-2 text-success fw-bold"><small>Task Name(${name})</small></h5> <br>
        <h5 class="text-description fw-bold"><small>Description(${description})</small></h5> <br>
         <h5 class="assigned-to fw-bold"><small>Assigned to(${assigned})</small></h5> <br>
         <h5 class="due-date fw-bold"><small>Due Date: (${date})</small></h5> <br>
         <h5 class="status fw-bold"><small>Status: (${status})</small></h5> <br>
         <a href="#" class="btn btn-primary fw-bold">Delete</a>
   </div>
</div>`;
 
   


class taskManager {
    constructor(currentId=0) {
        this.currentId = currentId;
        this.tasks =[];

    
    }
     getTaskById(taskId) {
        let foundTask;
        for (let i=0; i<this.tasks.length; i++) {
            let task = this.tasks[i];
            if (task.id === taskId) {
                foundTask = task;
            }
        }
        return foundTask;
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

        
        }
       

        render() {
            const taskHtmlList = [];
            //for (const task of this.tasks) {
                for(let i=0; i < this.tasks.length; i++) {
                    const task = this.tasks[i];
                const currentDate = new Date(task.date);
                const formattedDate = currentDate.getDate();
                const taskHtml = createTaskHtml (task.name, task.description, task.assigned, formattedDate, task.status, task.id);
                taskHtmlList.push(taskHtml);
            }
            const tasksHtml = taskHtmlList.join('\n');
        
            const tasksList = document.querySelector('#taskList');

            tasksList.innerHTML = tasksHtml;
            
                }

            save () {
              const myJson = JSON.stringify(this.tasks);
              const currentId = JSON.stringify(this.currentId);

              localStorage.setItem("tasksJson", myJson);
              localStorage.setItem("currentId",currentId);
            
            }

        load () {
            
            
        const tasksJson = localStorage.getItem("tasksJson");
        const currentId = localStorage.getItem("currentId");
       
          this.tasks = JSON.parse(tasksJson);
         this.currentId = Number(currentId);
         


        //  this.tasks = taskarray;
        

         
          //     if(currentId) {
        //         this.currentId = parseInt(this.currentId);
        //     }
        //    // const Number = JSON.Number(this.currentId);
        //     //const currentId = JSON.parsein(Number);
          }
          }
    