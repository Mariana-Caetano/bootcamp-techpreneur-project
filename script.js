document.getElementById("sendIt").addEventListener("click", validaFormulario)

function validaFormulario(){
  if (document.getElementById("email").value != "" && document.getElementById("msg").value != "" ) {
  alert("Yay! Let's talk.")
  }else{
    alert("Ops!Inform your Email and Message.") 
  }  
}