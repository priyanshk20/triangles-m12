const a = document.querySelector('#a');
const b = document.querySelector('#b');
const output = document.querySelector('#check-output');
const btn = document.querySelector('#btn');

const hypotenuseCalc = (a,b) => {

    const c =  Math.sqrt((a*a) + (b*b));
    output.innerText = `The length of hypotenuse is ${c}`;
}

btn.addEventListener('click', () => {
    const first = Number(a.value);
    const second = Number(b.value);
    hypotenuseCalc(first,second);
});