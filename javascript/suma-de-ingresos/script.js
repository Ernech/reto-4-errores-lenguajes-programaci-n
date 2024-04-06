const ingresos=[]

const formIngresos = document.getElementById("form-ingresos");

formIngresos.addEventListener("submit", (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    ingresos.push(Object.fromEntries(formData));
});
