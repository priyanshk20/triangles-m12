const angle1 = document.querySelector('#first');
const angle2 = document.querySelector('#second');
const angle3 = document.querySelector('#third');
const output = document.querySelector('#check-output')
const btn = document.querySelector('#btn')


btn.addEventListener('click', ()=>{
  let a1 = Number(angle1.value);
  let a2 = Number(angle2.value);
  let a3 = Number(angle3.value);

  checkTriangle(a1,a2,a3);
} )


const checkTriangle = (a1,a2,a3) => {
    
        if(a1+a2+a3===180){
            output.innerText = "The angles form a Triangle";
        } 
        else{
            output.innerText = "The angles do not form a Triangle"
        }  
}