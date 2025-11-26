//first and lastname id call
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let CodeEmail = document.getElementById("CodeEmail");
let Email = document.getElementById("Email");

//Button id call
let NameBtn = document.getElementById("NameBtn");
// Pulls JSON data
function getData(){
    return fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data.students;
    });
}


function randomizeData(students){
    let randomIndex = Math.floor(Math.random() * students.length);
    console.log([randomIndex]);
    return students[randomIndex];
}

NameBtn.addEventListener("click",  () => {
  getData().then((students)=> {
    let randomStudent = randomizeData(students);
    console.log(randomStudent);
    firstName.innerText = randomStudent.firstName;
    lastName.innerText = randomStudent.lastName;
    CodeEmail.innerText = randomStudent.CodeEmail;
    Email.innerText = randomStudent.Email;

  })
});