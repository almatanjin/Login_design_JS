const username = document.querySelector('#usernametype');
const password = document.querySelector('#passwordtype');
const button = document.querySelector("#buttontype");
// var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
username.addEventListener("click",addclass);
window.addEventListener("mouseover",toggoleclass);
password.addEventListener("click",toggoleclasspassword);
button.addEventListener("click",toggolebutton);
// button.addEventListener("click",myfunction);
document.addEventListener("keyup", myfunction);
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
function myfunction(){


const pw= document.getElementById("passwordtype").value;

const len = pw.length;
if(len<6)
{   
    button.classList.remove("buttontype");
    button.classList.add("buttonleft");
    button.addEventListener("mouseover",mouseover);
    
    
}
else
{
    button.classList.add("hoverbutton");
    button.classList.remove("buttonleft");
}



}
function mouseover() {
    button.classList.remove("buttontype");
    button.classList.toggle("buttonleft");
    button.classList.toggle("buttonright");
    // button.classList.toggle("buttontop");
    // button.classList.toggle("buttonbuttom");
    // alert("2");
}
