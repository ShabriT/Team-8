const button = document.querySelector('#btnSubmit')
const newTaskNameInput = document.querySelector('#taskName');

 
 const validFormFieldInput = (event) => {
    event.preventDefault();
    const name = newTaskNameInput.value;
    console.log("name:  " + name);
 };


button.addEventListener('click', validFormFieldInput)

function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }