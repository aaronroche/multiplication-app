const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const question = document.getElementById("question");
question.innerText = "What is " + num1 + " multiplied by " + num2 + "?";

const input = document.getElementById("input");

const form = document.getElementById("form");
const answer = num1 * num2;

const scoreEl = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));

if(score < 0 || (!score))
{
    score = 0;
}

scoreEl.innerText = "Score: " + score;

form.addEventListener("submit", () =>
{
    const userAns = +input.value;
    if (userAns === answer)
    {
        score++;
        updateLocalStorage();
    }
    else
    {
        score--;
        updateLocalStorage();
    }
})

function updateLocalStorage()
{
    localStorage.setItem("score", JSON.stringify(score));
}
