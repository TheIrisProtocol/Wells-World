function cmdPrompt(){
var command = prompt("Command:", "Enter Site Command");

    switch(command){
      default:
        alert("Unkown Command");
    }

}
document.getElementById("prompt").addEventListener("click", cmdPrompt);
