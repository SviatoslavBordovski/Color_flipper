const colors = ["red", "yellow", "green", "purple ", "silver"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () { //function which listens every click on button
    //get random number between 0 - 4
    const randomNumber = getRandomNumber(); //assign the function below which rounds the numbers
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
