const base = document.querySelector('#base');
const height = document.querySelector('#height');
const output = document.querySelector('#check-output');
const btn = document.querySelector('#btn');


btn.addEventListener('click', () => {

    const b = Number(base.value);
    const h = Number(height.value);
    areaCalc(b,h);
})


const areaCalc = (base,height) => {
    if(base>0&&height>0){
        const area = 0.5*base*height;
        output.innerText = `Area of the triangle is ${area} units`;
    }else{
        output.innerText = `Enter valid inputs`
    }
   
}