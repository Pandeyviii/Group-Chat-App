const oneChat=document.getElementById("one-to-one-chat");
const groupChat=document.getElementById("group-chat");
function oneChats(){
    console.log("hello ooooooo")
    window.location.href="../chat-window/chat-window.html";
}

function groupChats(){
    window.location.href="../group-window/group-window.html";
}


groupChat.addEventListener("click",groupChats);
oneChat.addEventListener("click",oneChats);
