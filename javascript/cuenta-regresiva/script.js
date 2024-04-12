const btnCount = document.getElementById('btn-count');
const counter = document.getElementById('counter');
let count = 10;

btnCount.addEventListener('click',async(event)=>{
    while(count>=0){
       
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        counter.textContent = count;
        count--;
        
    }
});