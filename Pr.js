const myButton = document.getElementById("#myButton");
const myLabel = document.getElementById("#myLabel");
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * 5) + 1;
    myLabel.textContent = randomNum;
};
