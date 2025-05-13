let person = {
  name: "Haseeb",
  age: 17,
  gender: "Male",
  city: "Lahore"
};

function updateMyName() {
    let newName = prompt("Enter your new name");
    person.name = newName;
}

function getMyName(){
    alert(person.name);
}