const quizForm = document.querySelector('.quiz-form');
const btn = document.querySelector('#btn');
const output = document.querySelector('#check-output');

const correct = ["90","right","3","8"];

const score = () => {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);

    for( let value of formResults.values()) {
       if(value === correct[index]){
           score++;
       }
       index++;
    }
    console.log(score);

    output.innerText = `Your score is ${score} / 4`;
}



btn.addEventListener('click', score);