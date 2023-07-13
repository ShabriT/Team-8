
 const createTaskHtml = (name, description, assigned, date, status, id) => ` 
   <div class="card"  data-task-id=${id}>
        <div class="card-body bg-success">
    
            <div class="col-12">
                <a href="#" class="btn btn-primary btn-sm fw-bold float-end done-button">Mark As Done</a>
            </div>
            <br>
            <h5 class="Task-2 text-light fw-bold"><small>Task Name: ${name}</small></h5> <br>
            <h5 class="text-description text-light fw-bold"><small>Description: ${description}</small></h5> <br>
            <h5 class="assigned-to text-light fw-bold"><small>Assigned to: ${assigned}</small></h5> <br>
            <h5 class="due-date text-light fw-bold"><small>Due Date: ${date}</small></h5> <br>
            <h5 class="status text-light fw-bold"><small>Status: ${status}</small></h5> <br>
            <a href="#" class="btn btn-primary fw-bold delete-button">Delete</a>
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
       
          if(tasksJson) {
            this.tasks = JSON.parse(tasksJson);
          } 

          if(currentId) {
            this.currentId = Number(currentId);
          } 
         
          }

        deleteTask (taskId) {
            const newTasks = [];
            for(let j=0; j < this.tasks.length; j++) {
                const task  = this.tasks[j];
                
                if(task.id !== taskId) {
                    newTasks.push(task);
                    console.log(newTasks);
                   
                    console.log(this.tasks);
                }
            
            }
            this.tasks = newTasks;
          }
          
          
}


          
    