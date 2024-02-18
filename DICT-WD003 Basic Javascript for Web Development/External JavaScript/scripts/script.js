const pname = document.querySelector(".studentName");
const pmessage = document.querySelector(".message");

const name = prompt("Enter your name ");
pname.textContent = `Hi, ${name}`;
pmessage.textContent = "Welcome to basic JS for Web Development";
