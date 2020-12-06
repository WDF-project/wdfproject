function formsubmit(){
    
    document.getElementById("signupform").reset()
    document.getElementById("signupmessage").style.display = "block";
}

var form = document.getElementById("signupform");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);