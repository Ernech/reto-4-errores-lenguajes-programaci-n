const btnCount = document.getElementById('btn-count');
const counter = document.getElementById('counter');
let count = 10;

btnCount.addEventListener('click',async(event)=>{
    
    clearInterval(countdownInterval);
    
    count = 10;
    
    
    countdownInterval = setInterval(() => {
        counter.textContent = count;
        count--;
        
        if (count <= 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
   
});