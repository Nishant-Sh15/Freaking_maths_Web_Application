let level = 1;
let answer = 'correct';
let play = document.querySelector('.start');
let body = document.querySelector('body');
let container = document.querySelector(".container");
let ans = document.querySelector(".ans");
let timer;

play.addEventListener("click", start);
async function start(event) {
    container.style.justifyContent = "flex-start";
    container.children[2].style.display = "none";
    container.children[3].style.display = "none";
    container.children[1].innerHTML = `Level:${level}`;
    await setTimeout(() => {
        container.children[4].style.display = "none";
        container.children[1].style.display = "block";
        container.children[5].style.display = "block";
        container.children[7].style.display = "none";
        container.children[6].style.display = "inline-block";
        body.children[0].classList.add("timer");
    }, 500);
    ques();
    timer = setTimeout(gameover, 5000);

}
function gameover() {
    container.children[1].innerHTML = `Level:${level}`;
    container.children[4].style.display = "none";
    container.children[5].style.display = "none";
    container.children[6].style.display = "none";
    container.children[3].style.display = "none";    
    container.children[7].style.display = "block";
}

function ques() {
    let num1 = Math.round(Math.random() * 100);
    let operator = Math.round(Math.random());
    let num2 = Math.round(Math.random() * 100);
    let ques = document.querySelector(".ques");
    let choice = Math.round(Math.random());
    ques.children[0].innerHTML = num1;
    if (operator == 1) {
        ques.children[1].innerHTML = `+`;
    } else {
        ques.children[1].innerHTML = `-`;
    }
    ques.children[2].innerHTML = num2;


    //correct answer
    if (choice == 1) {
        answer = 'correct';
        if (operator == 1) {
            ques.children[3].innerHTML = `= &nbsp;${num1 + num2}`;
        } else {
            ques.children[3].innerHTML = `= &nbsp;${num1 - num2}`;
        }
    }
    //wrong answer
    else {
        if (operator == 1) {
            let error = Math.round(Math.random() * 10);
            ques.children[3].innerHTML = `= &nbsp;${num1 + Math.round(Math.random() * num2) + error}`;
            answer = 'wrong';
        }
        else {
            let error = Math.round(Math.random() * 10);
            ques.children[3].innerHTML = `= &nbsp;${num1 - Math.round(Math.random() * num2) + error}`;
            answer = 'wrong';
        }
    }

}
ans.children[0].addEventListener("click", () => {
    clearTimeout(timer);
    body.children[0].classList.remove("timer");
    if (answer == 'correct') {
        level += 1;
        start();
    } else {
        gameover();
    }
    container.children[1].innerHTML = `Level:${level}`;
});
ans.children[1].addEventListener("click", () => {
    clearTimeout(timer);
    body.children[0].classList.remove("timer");
    if (answer == 'wrong') {
        level += 1;
        start();
    } else {
        gameover();
    }
    container.children[1].innerHTML = `Level:${level}`;
});
