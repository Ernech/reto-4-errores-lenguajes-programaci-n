const container = document.querySelector('.container');

const cargarImagenes=(numImagenes=10)=>{
    
    for(let i=0;i<numImagenes;i++){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(data=>{
            const imagen = document.createElement('img')
            imagen.src=`${data.message}`;
            imagen.classList.add('img-container')
            container.appendChild(imagen);
        })
        .catch(err=>console.log(err))

    }
}

cargarImagenes();

window.addEventListener('scroll',()=>{
    if(window.scrollY+window.innerHeight>= document.documentElement.scrollHeight-15){
        cargarImagenes()

    }
})