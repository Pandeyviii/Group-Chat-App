const groupChat=document.getElementById("group-chat");
const createGroupWindow=document.getElementById("create-group");
const allContacts=document.getElementById("left");
const toast=document.getElementById("toast-msg");
const messageHeader=document.getElementById("message-card-header");
const chatMessage=document.getElementById("chat-messages");

function groupChats(){
    console.log("hello ooooooo")
    window.location.href="../group-window/group-window.html";
}

function createGroupWindo(){
    window.location.href="../creategroup-window/creategroup-window.html";
}


groupChat.addEventListener("click",groupChats);
createGroupWindow.addEventListener("click",createGroupWindo);

async function allLoginUsers(){
    const token=localStorage.getItem("token");
    allContacts.innerHTML="";
    await axios.get("http://localhost:3000/chat/allcontacts",{headers:{"Authorization":token}})
    .then((res)=>{
        console.log(res);
        const user1=res.data.user
         user1.forEach((user)=>{
        const childNodes=`<li class="list-group-item" >${user.name}<input type="hidden" class="user-id" value=${user.id} /></li>`
        allContacts.innerHTML +=childNodes
    })
    })
    
}

async function showScreen(){
    allLoginUsers();
}

window.addEventListener("DOMContentLoaded",showScreen);
