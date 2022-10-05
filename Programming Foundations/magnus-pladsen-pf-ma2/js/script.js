// question 1

var pets = [
  {
    type: "cat",
    age: 5.5,
  },
  {
    type: "dog",
    age: 3.8,
  },
  {
    type: "parrot",
    age: 4.0,
  },
];

pets.forEach(function (pet) {
  console.log(pet.type);
});



// question 2

function logBoolean(value) {
  if (typeof value === "boolean") {
    console.log(value);
  } else {
    console.log("Please pass a boolean value in");
  }
}

logBoolean(true);
logBoolean("notABoolean");



// question 3

const button = document.querySelector(".button");
button.addEventListener('click', function(e) {
    e.preventDefault();
    const h2 = document.querySelector("h2");
    h2.style = "color: blue";
    h2.innerHTML = "Updated subheading";
});
