const button = document.querySelector('#btnSubmit')
const newTaskNameInput = document.querySelector('#taskName');

 
 const validFormFieldInput = (event) => {
    event.preventDefault();
    const name = newTaskNameInput.value;
    //console.log("name:  " + name);
    if (name == "") {
        alert("Fill it ");
     } else {
            console.log("name:  " +name);
        }
    }
 


button.addEventListener('click', validFormFieldInput)



 