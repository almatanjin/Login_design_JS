const username = document.querySelector('#usernametype');
const password = document.querySelector('#passwordtype');
const button = document.querySelector("#buttontype");
username.addEventListener("click",addclass);
window.addEventListener("mouseover",toggoleclass);
password.addEventListener("click",toggoleclasspassword);
button.addEventListener("click",toggolebutton);
// username.classList.add("usernametype");
//     username.classList.remove("hoverclass");

function addclass(){
    username.classList.remove("usernametype");
    username.classList.add("hoverclass");
}
function toggoleclass(){
    username.classList.add("usernametype");
    username.classList.remove("hoverclass");
    password.classList.add("passwordtype");
    password.classList.remove("hoverclass");
    button.classList.add("buttontype");
    button.classList.remove("hoverbutton");
  

}
function toggoleclasspassword(){
    password.classList.remove("passwordtype");
    password.classList.add("hoverclass");

}
function toggolebutton(){
    button.classList.remove("buttontype");
    button.classList.add("hoverbutton");
}
