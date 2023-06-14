const oneChat=document.getElementById("one-to-one-chat");
const createGroupWindow=document.getElementById("create-group");

function oneChats(){
    console.log("hello ooooooo")
    window.location.href="../chat-window/chat-window.html";
}

function createGroupWindo(){
    window.location.href="../creategroup-window/creategroup-window.html";
}


oneChat.addEventListener("click",oneChats);
createGroupWindow.addEventListener("click",createGroupWindo);
