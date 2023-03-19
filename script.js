num1 = Math.ceil(Math.random()*10);
//console.log("Second Number: " + num1);

num2 = Math.ceil(Math.random()*10);
//console.log("First Number: " + num2);

result = num1 * num2;
//console.log("multiplication of " + num1  + " and " + num2 +  " is: " + result);

let score = 0;
questionElement = document.getElementById('question');
questionElement.innerText = "What is " + num1 + " multiply by " + num2 + " ?";

const correctAns = num1 * num2;

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value 
    if(userAns === correctAns){
        score++;
        console.log(score);
    }else{
        score--;
    }
    //console.log(userAns, typeof userAns);
});

function updateLocalStorage(){
    
}