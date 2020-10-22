function cmdPrompt(){
var command = prompt("Command:", "Enter Site Command");
    if(command == null || command == ""){
    
    }else{
alert("Prompt Worked!");
}
}
document.getElementById("prompt").addEventListener("click", cmdPrompt);
